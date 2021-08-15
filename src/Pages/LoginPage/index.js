import React, { useState } from "react";
import { Login } from "../../Components";

const LoginPage = ({handleSubmit}) => {
  
  return <Login handleSubmit={handleSubmit} />;
};

export default LoginPage;