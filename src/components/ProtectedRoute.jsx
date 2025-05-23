import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import SignInUpModal from "./SignInUpModal";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // Whenever user goes from truthy→falsy or on first mount, open the modal
  useEffect(() => {
    if (!user) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [user]);
  if (!user) {
    return (
      <>
        <SignInUpModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            // navigate back or to home
            navigate("/lookup-service", { replace: true });
          }}
        />
      </>
    );
  }
  // Otherwise render the protected content
  return <>{children}</>;
}
