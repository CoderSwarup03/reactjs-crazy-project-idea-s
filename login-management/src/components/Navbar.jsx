// src/components/Navbar.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white p-4">
      <h1 className="font-bold text-xl">AuthApp</h1>
      <div>
        {user ? (
          <span className="font-medium">Hello, {user.username}</span>
        ) : (
          <span>Not Logged In</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
