import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function FactLayout() {
  return (
    <>
      <div className="flex ">
        <aside className="flex  w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8 h-100vh">
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <nav className="-mx-3 space-y-6 ">
              <div className="space-y-3 ">
                <label className="px-3 text-xs font-semibold uppercase text-white">
                  Know More about us
                </label>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-200 hover:text-black"
                  to="/home/facts/myjourney"
                >
                  <span className="mx-2 text-sm font-medium">My Journey</span>
                </Link>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  to="/home/facts/myprogress"
                >
                  <span className="mx-2 text-sm font-medium">
                    Member's transformation journey
                  </span>
                </Link>
              </div>
              <div className="space-y-3 ">
                <label className="px-3 text-xs font-semibold uppercase text-gray-200">
                  Content
                </label>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  to="/home/facts/FactNutrition"
                >
                  <span className="mx-2 text-sm font-medium">Nutrition</span>
                </Link>
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  to="/home/facts/recommendations"
                >
                  <span className="mx-2 text-sm font-medium">
                    Recommendations
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </aside>

        <Outlet />
      </div>
    </>
  );
}

export default FactLayout;
