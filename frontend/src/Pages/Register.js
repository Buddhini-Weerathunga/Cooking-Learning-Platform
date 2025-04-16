import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "STUDENT",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/auth/register", formData);
    alert("Registration successful");
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
      <select
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      >
        <option value="STUDENT">Student</option>
        <option value="INSTRUCTOR">Instructor</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
