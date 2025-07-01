import React from "react";
import AuthForm from "../components/AuthForm";
import { loginUser } from "../services/api";

export default function Login() {
  const handleLogin = async (form) => {
    try {
      const res = await loginUser(form);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      alert("✅ Logged in!");
      window.location.href = "/services";
    } catch (err) {
      alert("❌ Login failed.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
}
