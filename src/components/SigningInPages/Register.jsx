import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { account } from "../../appwrite/config";
import { NotificationContext } from "./LayoutLogin";
import { Bounce, ToastContainer } from "react-toastify";
import { ID } from "appwrite";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useContext(NotificationContext);
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const response = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
      // console.log(response);
      const loggedIn = await account.createEmailPasswordSession(
        email,
        password
      );
      // console.log(loggedIn);
      await account.createVerification(
        "https://fitness-app-souptik018.vercel.app/verification"
      );

      toast.success("Verify your email first 🏃 !!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      setTimeout(() => navigate("/loginLink"), 2200);
    } catch (error) {
      toast.error("Error !!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      console.log("Check this error", error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const response = await account.createOAuth2Session(
        "google",
        "https://fitness-app-souptik018.vercel.app/home",
        "https://fitness-app-souptik018.vercel.app/fail"
      );
      // console.log(response);
    } catch (error) {
      toast.error("Failed to sign in with Google", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      console.log("Google sign-in error:", error);
    }
  };
  const signInWithgithub = async () => {
    try {
      const response = await account.createOAuth2Session(
        "github",
        "https://fitness-app-souptik018.vercel.app/home",
        "https://fitness-app-souptik018.vercel.app/fail"
      );

      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister();
  };
  return (
    <>
      <section
        className="h-dvh sm:h-dvh lg:h-dvh xl:h-dvh"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          width: "screen",
        }}
      >
        <div className=" flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div
            style={{ boxShadow: "rgba(255, 255, 255, 1.35) 0px 0px 14px" }}
            className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md rounded-xl p-4"
          >
            <h2 className="text-center text-2xl font-bold leading-tight text-neutral-900">
              Sign up to create an account
            </h2>
            <p className="mt-2 text-center text-base text-white">
              Already have an account?{" "}
              <NavLink
                to="/login"
                title=""
                className="font-medium text-orange-200 transition-all duration-200 hover:underline"
              >
                Sign In
              </NavLink>
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-white"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-white"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border  text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <hr className="space-y-3 m-2 border-green-800" />
              <p className="text-center text-slate-200">OR</p>
              <button
                onClick={() => signInWithGoogle()}
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-black transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign up with Google
              </button>
              <button
                onClick={() => signInWithgithub()}
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <img
                  className="h-6 w-6 mr-2"
                  src="https://img.icons8.com/?size=256&id=s1rwrv9mNnN4&format=png"
                  alt=""
                />
                Sign in with Github
              </button>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Register;
