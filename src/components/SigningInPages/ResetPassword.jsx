import React, { useContext, useState } from "react";
import { account } from "../../appwrite/config";
import { homeContext } from "../Layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";

function ResetPassword() {
  const { toast, Bounce, ToastContainer } = useContext(homeContext);
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleNewPassword = async (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    const secret = urlParams.get("secret");

    try {
      const response = await account.updateRecovery(
        userId,
        secret,
        password.newPassword,
        password.confirmPassword
      );
      toast.success("Password reset successfully", {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setTimeout(() => navigate("/login"), 2400);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setPassword({ newPassword: "", confirmPassword: "" });
  };

  const onChangeHandler = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
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
              className=" xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md p-8 "
            >
              <h2 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
                Set your password ✌️
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Steady breathing chill out....
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
                      htmlFor="newPassword"
                      className="text-base font-medium text-gray-600"
                    >
                      Enter new password
                    </label>
                    <div className="mt-2">
                      <input
                        id="newPassword"
                        name="newPassword"
                        className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none text-black focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        required
                        onChange={(e) => onChangeHandler(e)}
                        value={password.newPassword}
                        placeholder="New Password"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="text-base font-medium text-gray-600"
                    >
                      Confirm password
                    </label>
                    <div className="mt-2">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none text-black focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        required
                        onChange={(e) => onChangeHandler(e)}
                        value={password.confirmPassword}
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      onClick={(e) => handleNewPassword(e)}
                      className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-neutral-600"
                    >
                      Reset password
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
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
