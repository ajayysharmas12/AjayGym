import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { account } from "../../appwrite/config";
import ContentLoader from "./ContentLoader";
import Loader from "./Loader";

export const homeContext = createContext({
  toast,
  ToastContainer,
  Bounce,
  Loader,
  ContentLoader,
  setaccountName: () => {},
});

function Layout() {
  const [accountName, setaccountName] = useState();
  const [emailName, setEmailName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn();
  }, []);

  useEffect(() => {
    // console.log(accountName);
    // console.log(emailName);
    isLoggedIn();
  }, [accountName, emailName]);

  const isLoggedIn = async () => {
    try {
      const signedIntoAccount = await account.get("current");
      setaccountName(signedIntoAccount.name);
      setEmailName(signedIntoAccount.email);
    } catch (error) {
      console.log("Authentication error:", error);
      navigate("/login");
    }
  };

  return (
    <homeContext.Provider
      value={{
        toast,
        ToastContainer,
        Bounce,
        Loader,
        ContentLoader,
        emailName,
        setaccountName,
        accountName,
        isLoggedIn,
      }}
    >
      {accountName ? (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <div className="text-center">
            <Loader />
          </div>
        </div>
      )}
    </homeContext.Provider>
  );
}

export default Layout;
