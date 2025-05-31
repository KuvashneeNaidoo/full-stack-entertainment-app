import React, { useState } from "react";
import { Film } from "lucide-react";

const AuthScreen = ({ onAuth }) => {
  const [authMode, setAuthMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (authMode === "signup" && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    onAuth(email, password);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 p-8 rounded-xl w-full max-w-md">
        <div className="text-center mb-8">
          <Film className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">
            {authMode === "login" ? "Login" : "Sign Up"}
          </h1>
          <p className="text-gray-400">
            {authMode === "login" ? "Welcome back!" : "Create your account"}
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
          {authMode === "signup" && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
          )}
          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium text-base transition-colors"
          >
            {authMode === "login" ? "Login" : "Create Account"}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            {authMode === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() =>
                setAuthMode(authMode === "login" ? "signup" : "login")
              }
              className="text-red-600 hover:text-red-500 font-medium transition-colors"
            >
              {authMode === "login" ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
