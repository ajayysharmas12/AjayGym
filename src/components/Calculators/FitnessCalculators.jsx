import React from "react";
import Bmi from "./Bmi";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
function FitnessCalculators() {
  return (
    <div className="flex">
      <aside className="flex h-screen w-60 flex-col overflow-y-auto border-r  bg-white px-5 py-8">
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 text-center">
            <div className="space-y-4 ">
              <label className=" px-3 text-xs font-semibold uppercase text-gray-900">
                Quick Check
              </label>
              <NavLink
                to="/home/fitnessCalculators/bmi"
                className="w-full flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700"
              >
                <span className="m-2 space-y-4 block mx-2 text-sm font-medium">
                  BMI
                </span>
              </NavLink>
              <NavLink
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700"
                to="/home/fitnessCalculators/bodyFat"
              >
                <span className="m-2 block mx-2 text-sm font-medium"> FAT</span>
              </NavLink>
            </div>
            <div className="space-y-3 ">
              <label className="block m-2 px-3 text-xs font-semibold uppercase text-gray-900">
                Detailed Calculators
              </label>
              <NavLink
                to="/home/fitnessCalculators/bmr"
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700"
              >
                <span className="m-2 block mx-2 text-sm font-medium">BMR </span>
              </NavLink>
              <NavLink
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700"
                to="/home/fitnessCalculators/macros"
              >
                <span className="block m-2 mx-2 text-sm font-medium">
                  MACROS
                </span>
              </NavLink>
            </div>
          </nav>
        </div>
      </aside>
      <Outlet />
    </div>
  );
}

export default FitnessCalculators;
