import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/SigningInPages/Register.jsx";
import Login from "./components/SigningInPages/Login.jsx";
import Homepage from "./components/Navbar/Homepage.jsx";
import Facts from "./components/Navbar/Facts/Facts.jsx";
import FitnessData from "./components/Navbar/FitnessData/FitnessData.jsx";
import Profile from "./components/Navbar/Profile.jsx";
import FitnessCalculators from "./components/Calculators/FitnessCalculators.jsx";
import Bmi from "./components/Calculators/Bmi.jsx";
import Bmr from "./components/Calculators/Bmr.jsx";
import Macros from "./components/Calculators/Macros.jsx";
import BodyFatPercentage from "./components/Calculators/BodyFatPercentage.jsx";
import Workouts from "./components/Workouts/Workouts.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Nutrition from "./components/Navbar/Nutrition.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Community from "./components/Community/Community.jsx";
import Mentorship from "./components/Navbar/Mentorship.jsx";
import FitnessCalculatorsLandingPage from "./components/Calculators/FitnessCalculatorsLandingPage.jsx";
import MyJourney from "./components/Navbar/Facts/MyJourney.jsx";
import MyProgress from "./components/Navbar/Facts/MyProgress.jsx";
import Recommendations from "./components/Navbar/Facts/Recommendations.jsx";
import FactNutrition from "./components/Navbar/Facts/FactNutrition.jsx";
import FactLayout from "./components/Navbar/Facts/FactLayout.jsx";
import FitnessDataLayout from "./components/Navbar/FitnessData/FitnessDataLayout.jsx";
import FitnessDetails from "./components/Navbar/FitnessData/FitnessDetails.jsx";
import ViewFitnessDetails from "./components/Navbar/FitnessData/ViewFitnessDetails.jsx";
import Verify from "./components/SigningInPages/Verify.jsx";
import ForgotPassword from "./components/SigningInPages/ForgotPassword.jsx";
import ResetPassword from "./components/SigningInPages/ResetPassword.jsx";
import LoginLinkPage from "./components/SigningInPages/LoginLinkPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/loginLink",
    element: <LoginLinkPage />,
  },
  {
    path: "/verification",
    element: <Verify />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "facts",
        element: <FactLayout />,
        children: [
          {
            path: "",
            element: <Facts />,
          },
          {
            path: "myjourney",
            element: <MyJourney />,
          },
          {
            path: "myprogress",
            element: <MyProgress />,
          },
          {
            path: "recommendations",
            element: <Recommendations />,
          },

          {
            path: "FactNutrition",
            element: <FactNutrition />,
          },
        ],
      },
      {
        path: "nutrition",
        element: <Nutrition />,
      },

      {
        path: "workouts",
        element: <Workouts />,
      },
      {
        path: "fitnessData",
        element: <FitnessDataLayout />,
        children: [
          {
            path: "",
            element: <FitnessData />,
          },
          {
            path: "details",
            element: <FitnessDetails />,
          },
          {
            path: "ViewFitnessDetails",
            element: <ViewFitnessDetails />,
          },
        ],
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "mentorship",
        element: <Mentorship />,
      },
      {
        path: "fitnessCalculators",
        element: <FitnessCalculators />,
        children: [
          {
            path: "",
            element: <FitnessCalculatorsLandingPage />,
          },
          {
            path: "bmi",
            element: <Bmi />,
          },
          {
            path: "bmr",
            element: <Bmr />,
          },
          {
            path: "macros",
            element: <Macros />,
          },
          {
            path: "bodyFat",
            element: <BodyFatPercentage />,
          },
        ],
      },
    ],
  },

  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
