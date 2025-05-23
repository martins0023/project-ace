import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { navItems } from "../constants";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";
import SignInUpModal from "./SignInUpModal";
import { UserMenu } from "./UserMenu";

const Navbar = () => {
  const { session, logout } = useAuth();
  const user = session?.user;
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  // Extract avatar URL from Supabase user object
  let avatarUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpPwM5mR5lNHGg9vxaoUgcnAIBOJumsoJrg&s";
  let displayName = "";
  if (user) {
    avatarUrl =
      user.user_metadata?.avatar_url ||
      user.user_metadata?.picture ||
      avatarUrl;
    displayName = user.user_metadata?.full_name || user.email;
  }

  const HandleSignUp = () => navigate("/signup");
  const HandleSignIn = () => navigate("/login");
  const HandleProfile = () => navigate("/profile");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-primary">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div
            onClick={handleHome}
            className="flex items-center flex-shrink-0 cursor-pointer"
          >
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl font-monument tracking-tight">
              project ace
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="font-poppins font-medium">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center font-poppins space-x-12 items-center">
            {/* Conditionally show SignIn/Out */}
            {user ? (
              <>
                <UserMenu
                  avatarUrl={avatarUrl}
                  displayName={displayName}
                  onProfile={HandleProfile}
                  onLogout={logout}
                />
              </>
            ) : (
              <>
                <button
                  onClick={HandleSignIn}
                  // onClick={() => setSignupModalOpen(true)}
                  href="#"
                  className="py-2 px-3 border rounded-md"
                >
                  Sign In
                </button>
                <button
                  onClick={HandleSignUp}
                  // onClick={() => setSignupModalOpen(true)}
                  href="#"
                  className="bg-gradient-to-r cursor-pointer from-primary to-gray-600 text-white py-2 px-3 rounded-md"
                >
                  Create an account
                </button>
              </>
            )}
          </div>

          {/* mobile menu toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* mobile drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 font-poppins font-normal">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex cursor-pointer space-x-6 font-poppins mt-5">
              {user ? (
                <>
                  <button
                    onClick={logout}
                    className="text-red-700 hover:underline"
                  >
                    Logout
                  </button>
                  <div
                    onClick={HandleProfile}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <img
                      src={avatarUrl}
                      alt={displayName}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">
                      Hello, {displayName.split(" ")[0]}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={HandleSignIn}
                    className="py-2 px-3 border rounded-lg hover:rounded-full font-medium"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={HandleSignUp}
                    className="py-2 px-3 text-white rounded-lg hover:rounded-full cursor-pointer bg-gradient-to-r from-primary to-gray-600"
                  >
                    Create an account
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      {/* sign in Modal */}
      <SignInUpModal
        isOpen={signupModalOpen}
        onClose={() => setSignupModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
