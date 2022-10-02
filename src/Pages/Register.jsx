import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ user: "", email: "", password: "" });
  const [err, setErr] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        username: inputs.username[0],
        email: inputs.email[0],
        password: inputs.password[0],
      });
      navigate("/login");
      console.log(res);
    } catch (error) {
      setErr(error.response.data);
      console.log(error);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          required
          type="text"
          name="username"
          placeholder="User Name"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account?<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
