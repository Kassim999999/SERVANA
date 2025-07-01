import React from "react";
import AuthForm from "../components/AuthForm";
import { registerUser } from "../services/api";

export default function Register() {
  const handleRegister = async (form) => {
    try {
      await registerUser(form);
      alert("✅ Registered! You can now log in.");
      window.location.href = "/login";
    } catch (err) {
      alert("❌ Registration failed.");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
  );
}
