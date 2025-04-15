import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData
      );

      if (response.data.success) {
        // Save user info in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: formData.username,
            password: formData.password, // Required for Basic Auth later
            role: response.data.role,
          })
        );

        // Navigate based on role
        if (response.data.role === "STUDENT") {
          navigate("/student");
        } else if (response.data.role === "INSTRUCTOR") {
          navigate("/instructor");
        }
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("Login error");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
