import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const login = async (inputs) => {
    let res = await axios.post("http://localhost:8800/api/auth/login", {
      username: inputs.username,
      password: inputs.password,
    });
    console.log(currentUser);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post("http://localhost:8800/api/auth/login");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthState = () => {
  return useContext(AuthContext);
};
