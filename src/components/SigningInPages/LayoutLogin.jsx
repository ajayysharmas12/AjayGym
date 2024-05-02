import React, { createContext, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NotificationContext = createContext({
  toast,
  ToastContainer,
});

function LayoutLogin() {
  return (
    <>
      <NotificationContext.Provider value={{ toast, ToastContainer }}>
        <Register />
        <Login />
        <ToastContainer />
      </NotificationContext.Provider>
    </>
  );
}

export default LayoutLogin;
