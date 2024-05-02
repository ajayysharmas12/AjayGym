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
            <div className="mt-6">
              <div className="rounded-lg bg-gray-100 p-3 ">
                <h2 className="text-sm font-medium text-gray-800">
                  New feature availabel!
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  harum officia eligendi velit.
                </p>
                <img
                  className="mt-2 h-32 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1806&amp;q=80"
                  alt="Feature"
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-x-2">
                  <img
                    className="h-7 w-7 rounded-full object-cover"
                    src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                    alt="avatar"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Dan Abromov
                  </span>
                </a>
                <a
                  href="#"
                  className="rotate-180 text-gray-800 transition-colors duration-200 hover:text-gray-900"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </aside>

        <Outlet />
      </div>
    </>
  );
}

export default FactLayout;
