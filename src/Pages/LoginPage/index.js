import React, { useState } from "react";
import { Login } from "../../Components";

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    setLoggedIn(true)
    localStorage.setItem("username", username);
    // Redirect to chatpage;
    
  };
  return <Login handleSubmit={handleSubmit} />;
};

export default LoginPage;