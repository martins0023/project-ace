import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import DetailPage from "./pages/DetailPage";
import CreateService from "./pages/Services/CreateService";
import LookupService from "./pages/Services/LookupService";
import LookupServiceDetails from "./pages/Services/LookupServiceDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile/Profile";
import LoginEmail from "./components/LoginEmail";
import SignUpEmail from "./components/SignUpEmail";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="discover" element={<Discover />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="lookup-service" element={<LookupService />} />
          <Route path="services/:id" element={<LookupServiceDetails />} />

          {/* login and sign up */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login-email" element={<LoginEmail />} />
          <Route path="/signup-email" element={<SignUpEmail />} />

          {/* Protected routes */}
          <Route
            path="/create-service"
            element={
                <CreateService />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
