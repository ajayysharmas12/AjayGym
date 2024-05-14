import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { account } from "../../appwrite/config";
import applogo from "../../assets/appLogo.jpg";
import { homeContext } from "../Layout/Layout";

function Navbar() {
  const {
    toast,
    ToastContainer,
    Bounce,
    isLoggedIn,
    accountName,
    setaccountName,
    Loader,
  } = useContext(homeContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [optionsNav, setOptionsNav] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  useEffect(() => {
    isLoggedIn();
  }, []);

  const handleLogout = async () => {
    try {
      const loggingOUT = await account.deleteSession("current");
      // console.log(loggingOUT);
      setaccountName(null);
      toast.success("Resting time!! ", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2400);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="relative w-full bg-white">
        <div className=" flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 mr-24">
            <span>
              <img className="h-10 w-14" src={applogo} alt="" />
            </span>
            <span className="font-bold">
              <NavLink to="/home">Fit Fitness </NavLink>
            </span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <NavLink
                  to="fitnessCalculators"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Fitness Calculators
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="facts"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Facts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="nutrition"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Nutrition
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="workouts"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Workouts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="fitnessdata"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Fitness Data
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="community"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Community
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="mentorship"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Mentorship
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            <div className="ml-2  hidden lg:inline-block">
              <span className="h-5 relative inline-block ">
                <img
                  className="h-8 w-10 rounded-full"
                  src="https://banner2.cleanpng.com/20180219/yze/kisspng-adobe-illustrator-sport-exercise-equipment-vector-exercise-dumbbells-5a8b904b93e5a1.5696945315190958836058.jpg"
                  alt="profile pic"
                />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
              </span>
            </div>

            <div className="ml-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 cursor-pointer"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </div>

            {/* Profile Dropdown */}
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                type="button"
                className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {accountName}
              </button>

              {dropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Settings
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => handleLogout()}
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Log Out
            </button>
          </div>
          <div className="relative inline-block text-left ">
            <div
              className="sm:block lg:hidden "
              onClick={() => setOptionsNav((prev) => !prev)}
            >
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Menu
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`absolute ${
                optionsNav ? "block" : "hidden"
              } right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <NavLink
                  to="#"
                  className="text-gray-700 block px-4 py-2 text-sm "
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  {accountName}
                </NavLink>
                <hr className="my-2 border-1 border-black" />
                <NavLink
                  to="fitnessCalculators"
                  className="text-gray-700 block px-4 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Calculators
                </NavLink>
                <br />
                <NavLink
                  to="facts"
                  className="text-gray-700 block px-4 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Facts
                </NavLink>
                <br />
                <NavLink
                  to="nutrition"
                  className="text-gray-700 block px-4 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Nutrition
                </NavLink>
                <br />
                <NavLink
                  to="workouts"
                  className="text-gray-700 block px-4 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Workout
                </NavLink>
                <br />
                <NavLink
                  to="mentorship"
                  className="text-gray-700 block px-4 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Mentorship
                </NavLink>
                <br />
                <NavLink
                  to=""
                  onClick={() => handleLogout()}
                  className="text-gray-700 block px-4 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Navbar;
