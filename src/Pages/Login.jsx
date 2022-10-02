import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AuthState } from "../context/authContext";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ user: "", email: "", password: "" });
  const [err, setErr] = useState(null);
  const [setCookie] = useCookies(["access-token"]);
  const { currentUser, login } = AuthState();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({
        username: inputs.username,
        password: inputs.password,
      });
      setCookie("access-token", currentUser.jwt, { path: "/" });
      navigate("/");
    } catch (error) {
      console.log(error);
      setErr(error.response.data);
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
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account?<Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
