import React, { useContext, useEffect } from "react";
import { homeContext } from "../Layout/Layout";
import videoplayback from "../../Images/videoplayback.mp4";
import { useState } from "react";
import { FaThumbsDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Homepage() {
  const { Loader, accountName, ToastContainer } = useContext(homeContext);
  const [HomeAccountName, setHomeAccountName] = useState();
  // console.log("name of account ", accountName);
  const checkAccountName = () => {
    setHomeAccountName(accountName);
    // console.log(accountName);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    const secret = urlParams.get("secret");

    if (userId && secret) {
      verifyAccount(userId, secret);
    }
  }, []); // Only run once on component mount

  const verifyAccount = async (userId, secret) => {
    try {
      await account.updateVerification(userId, secret);
      console.log("Account verified successfully");
      navigate("/home");
    } catch (error) {
      console.log("Verification error:", error);
      // Handle verification error, e.g., display error message to the user
    }
  };
  useEffect(() => {
    checkAccountName();
    console.log("name of account ", accountName);
  }, []);

  return (
    <>
      {accountName ? (
        <>
          <div className="flex flex-col">
            <div>
              <video
                src={videoplayback}
                autoPlay={true}
                loop
                muted
                className="w-screen h-screen"
                style={{ objectFit: "cover" }}
              ></video>
            </div>
            <div className="w-full">
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
                  backgroundImage: `url(https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                }}
              >
                <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
                  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                    <div className="flex justify-center"></div>
                    <div className="mt-5 max-w-2xl text-center mx-auto">
                      <h1 className="block font-bold text-gray-800 text-5xl md:text-5xl lg:text-8xl dark:text-gray-200">
                        <span className="bg-clip-text bg-gradient-to-tl from-blue-200 to-orange-400 text-transparent">
                          Let's
                        </span>
                        <span className="bg-clip-text bg-gradient-to-tl from-blue-400 to-white text-transparent">
                          Build
                        </span>
                        <span className="bg-clip-text bg-gradient-to-tl from-blue-200 to-green-500 text-transparent">
                          Together
                        </span>
                      </h1>
                    </div>

                    <div className="mt-5 max-w-3xl text-center mx-auto">
                      <p className="text-xl text-gray-600 dark:text-gray-200">
                        Transform your body, transform your life! Sign up for
                        our gym mentorship program today and unleash your full
                        potential
                      </p>
                    </div>
                    <div className="mt-8 gap-3 flex justify-center">
                      <NavLink to="mentorship">
                        <button
                          type="button"
                          className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-lg rounded-lg border border-zinc-400 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-800  dark:border-white dark:text-white dark:hover:bg-blue-900 hover:border-orange-500"
                        >
                          Get Started Now
                          <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-gray-700 dark:text-gray-400">
                            <span className="flex-shrink-0 size-4 group-hover:-rotate-180 transition">
                              <FaThumbsDown />
                            </span>
                          </span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <ToastContainer />
        </>
      ) : (
        <div className="w-full h-screen flex justify-center items-center bg-slate-200">
          <div className="">{Loader()}</div>
        </div>
      )}
    </>
  );
}

export default Homepage;
