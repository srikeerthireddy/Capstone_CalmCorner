import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (token, userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  // In dev (localhost), use relative /api so Vite proxy forwards to local backend - avoids CORS
  const apiBase = import.meta.env.VITE_API_URL ||
    (import.meta.env.DEV ? "/api" : "https://s61-srikeerthi-capstone-calmcorner-6.onrender.com/api");

  const logout = async () => {
    try {
      await fetch(`${apiBase}/users/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("Logout error", err);
    }

    setIsLoggedIn(false);
    setUser(null);
  };

  const checkAuthStatus = async () => {
    try {
      const token = Cookies.get("token");
      const headers = {};
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(`${apiBase}/users/auth/status`, {
        credentials: "include",
        headers,
      });

      if (!res.ok) {
        throw new Error("Not authenticated");
      }

      const data = await res.json();
      setIsLoggedIn(true);
      setUser(data.user);
    } catch (err) {
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  if (loading) return null;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
        refreshAuth: checkAuthStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
