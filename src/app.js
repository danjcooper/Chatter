import React, { useState, useEffect } from "react";

// components.
import { Nav } from "./Components";
import { LoginPage, ChatPage } from "./Pages";

import styles from "./style.module.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    setLoggedIn(true);
    localStorage.setItem("username", username);
  };

  return (
    <>
      <Nav />
      {loggedIn ? <ChatPage /> : <LoginPage  handleSubmit={handleSubmit}/>}
    </>
  );
};

export default App;
