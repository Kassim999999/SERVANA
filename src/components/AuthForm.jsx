import React, { useState } from "react";

export default function AuthForm({ type, onSubmit }) {
  const [form, setForm] = useState({ email: "", password: "", full_name: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {type === "register" && (
        <input name="full_name" placeholder="Full Name" value={form.full_name} onChange={handleChange} required />
      )}
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit">{type === "login" ? "Login" : "Register"}</button>
    </form>
  );
}
