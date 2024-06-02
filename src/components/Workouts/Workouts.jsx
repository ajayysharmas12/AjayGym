import React, { useState } from "react";
import WorkoutItems from "./WorkoutItems";

function Workouts() {
  const [formData, setFormData] = useState([]);
  // console.log(formData);
  function getData(e) {
    setFormData(e);
  }
  return (
    <>
      <div className="flex">
        <div>
          <aside
            className={`flex h-full w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8`}
          >
            <div className="mt-6 flex flex-1 flex-col justify-between">
              <nav className="-mx-3 space-y-6 ">
                <div className="space-y-3 ">
                  <label className="px-3 text-xs font-semibold uppercase text-white">
                    <p className="w-full">How to use the Search -</p>
                    <p className="w-3/5">
                      Quantity means how many types of exercises you want for a
                      muscle group
                    </p>
                  </label>

                  <a
                    className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                    href="#"
                  >
                    <span className="mx-2 text-sm font-medium">
                      Muscle Group - <br />
                      <h4 className="w-full">Back</h4>
                      <h4 className="w-full">Cardio</h4>
                      <h4 className="w-full">Chest</h4>
                      <h4 className="w-full">Lower arms</h4>
                      <h4 className="w-full">Lower legs</h4>
                      <h4 className="w-full">Neck</h4>
                      <h4 className="w-full">Shoulders</h4>
                      <h4 className="w-full">Upper arms</h4>
                      <h4 className="w-full">Upper legs</h4>
                      <h4 className="w-full">Waist</h4>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </aside>
        </div>
        <div
          className="flex"
          style={{
            height: formData.length > 0 ? "100vh" : "auto", // Corrected height values
            width: "100%",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://images.unsplash.com/photo-1620188489543-326860bd4b45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        >
          <WorkoutItems getData={getData} />
        </div>
      </div>
    </>
  );
}

export default Workouts;
