import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is "user"
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      if (role === "admin") {
        if (email !== "adminname@gmail.com" || password !== "Admin@1234") {
          alert("Invalid Admin credentials!");
          return;
        }
      } else {
        if (password === "Admin@1234") {
          return;
        }
      }

      await axios.post("http://localhost:5000/api/auth/signup", { email, password, role });

      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      alert("Signup & Login Successful!");

      navigate(res.data.role === "admin" ? "/AdminHome" : "/UserHome");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="signup">
    <div className="signup-container">
      <h2>Signup</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleSignup}>Signup</button>
      <p onClick={() => navigate("/")}>You have an account? Login</p>
    </div>
    </div>
  );
};

export default Signup;
