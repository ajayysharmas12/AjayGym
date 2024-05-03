import React, { useState } from "react";
import { account } from "../../appwrite/config";
import { NavLink } from "react-router-dom";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await account.createRecovery(
        email,
        "https://fitness-app-souptik018.vercel.app/resetpassword"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setEmail("");
  };
  const signInWithGoogle = async () => {
    try {
      const response = await account.createOAuth2Session(
        "google",
        "https://fitness-app-souptik018.vercel.app/home",
        "https://fitness-app-souptik018.vercel.app/fail"
      );
      console.log(response);
    } catch (error) {
      toast.error("Failed to sign in with Google", {
        position: "top-right",
        autoClose: 2000,
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
  return (
    <>
      <div
        className="w-full"
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-24">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
            <div
              style={{
                boxShadow: "rgba(250, 250, 200, 1.0) 0px 0px 18px",
                borderRadius: "10px",
              }}
              className=" xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md p-4 "
            >
              <h2 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
                Forgot Password 😁
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Chill... and take a peaceful breath...{" "}
                <NavLink
                  to="/"
                  title=""
                  className="font-medium text-gray-200 transition-all duration-200 hover:underline"
                >
                  Back to Sign in
                </NavLink>
              </p>
              <form className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-600"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none  text-black focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      onClick={(e) => handleResetPassword(e)}
                      className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-neutral-600"
                    >
                      Recover Password
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
                <hr className="my-5 border-slate-400" />
                <p className="text-center text-sm text-gray-800 mt-4">OR</p>
              </form>
              <div className="mt-3 space-y-3">
                <button
                  onClick={() => signInWithGoogle()}
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-slate-400 px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
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
                  Sign in with Google
                </button>
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-slate-400 px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-[#2563EB]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </span>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
