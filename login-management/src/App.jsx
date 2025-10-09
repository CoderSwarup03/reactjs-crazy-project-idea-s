// src/App.jsx
import React from "react";
import { useAuth } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

const App = () => {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      {user ? <Profile /> : <LoginForm />}
    </div>
  );
};

export default App;
