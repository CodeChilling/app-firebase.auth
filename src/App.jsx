/* eslint-disable no-unused-vars */
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./config/AuthContext";
import WelcomePage from "./pages/WelcomePage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import RecoverPasswordPage from "./pages/RecoverPasswordPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={
            <ProtectedRoute>
              <WelcomePage />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotpassword" element={<RecoverPasswordPage/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
