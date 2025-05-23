// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../lib/supabaseClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  // On mount, fetch current session
  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setUser(data.session?.user ?? null);
    })();

    // Subscribe to future changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);

      // ensure a row in "users"
      if (newSession?.user) {
        try {
          const { error } = await supabase.from("users").upsert({
            id: newSession.user.id,
            email: newSession.user.email,
            first_name:
              newSession.user.user_metadata.full_name?.split(" ")[0] ?? "",
            last_name:
              newSession.user.user_metadata.full_name
                ?.split(" ")
                .slice(1)
                .join(" ") ?? "",
            avatar_url: newSession.user.user_metadata.avatar_url,
          });
          if (error) console.error("Upsert error:", error);
        } catch (err) {
          console.error("Unexpected upsert failure:", err);
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loginWithGoogle = () =>
    supabase.auth.signInWithOAuth({ provider: "google" });

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign out error:", error);
    }
    // immediately clear state so UI updates
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ session, user, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
