import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import AgentDashboard from "./components/AgentDashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <AgentDashboard />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
