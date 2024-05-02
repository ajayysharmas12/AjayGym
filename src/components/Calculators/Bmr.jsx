import React, { useContext, useState } from "react";
import { homeContext } from "../Layout/Layout";

function BasalMetabolicRate() {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
  });
  const { toast, ToastContainer, Bounce, Loader } = useContext(homeContext);

  const [bmr, setBmr] = useState(null);

  const handleCalculate = () => {
    const { gender, weight, height, age } = formData;
    if (gender === "" || age === "" || weight === "" || height === "") {
      return toast.error("Fill All Fields!", {
        position: "top-right",
        autoClose: 2800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      if (gender === "male") {
        const bmrResult = 10 * weight + 6.25 * height - 5 * age + 5;
        const bmrData = Math.floor(parseFloat(bmrResult.toFixed(2)));
        setBmr(bmrData);
      } else if (gender === "female") {
        const bmrResult = 10 * weight + 6.25 * height - 5 * age - 161;
        const bmrData = Math.floor(parseFloat(bmrResult.toFixed(2)));
        setBmr(bmrData);
      }
      toast.success("BMR Calculated !", {
        position: "top-right",
        autoClose: 2800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <div className="w-full">
        <div
          style={{
            minHeight: "100vh",
            width: "100%",
            backgroundImage: `url(https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="w-96 text-white border-2 border-black rounded-lg p-2 mb-24 mr-24"
            style={{
              boxShadow: "rgba(200, 200, 200, 1.4) 0px 0px 24px",
              borderRadius: "10px",
              background: "rgba(0, 0, 0, 0.5)", // Add background color with opacity
            }}
          >
            <form className="flex flex-col">
              <h1 className="text-xl font-bold mb-4">
                BASAL METABOLIC RATE CALCULATOR
              </h1>
              <label htmlFor="gender" className="block">
                Gender
              </label>
              <select
                id="gender"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className="text-black w-1/2 border-black border-2 rounded-md mb-2"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label htmlFor="age" className="block">
                Enter your age in years:
              </label>
              <input
                id="age"
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                className="text-black w-1/2 border-black border-2 rounded-md mb-2"
                type="number"
                min="0"
                max="110"
              />
              <label htmlFor="weight" className="block">
                Enter your weight in Kgs:
              </label>
              <input
                id="weight"
                onChange={(e) =>
                  setFormData({ ...formData, weight: e.target.value })
                }
                className="text-black w-1/2 border-black border-2 rounded-md mb-2"
                type="number"
                min="0"
                max="500"
              />
              <label htmlFor="height" className="block">
                Enter your height in centimeters:
              </label>
              <input
                id="height"
                onChange={(e) =>
                  setFormData({ ...formData, height: e.target.value })
                }
                className="text-black w-1/2 border-black border-2 rounded-md mb-2"
                type="number"
                min="0"
                max="300"
              />
              <button
                type="button"
                onClick={() => handleCalculate()}
                className="block bg-slate-400 border-2 p-2"
              >
                Calculate
              </button>
              <div className="mt-4">
                <h1>
                  Your Basal Metabolic Rate (BMR) is: <br /> {bmr} calories/Day
                </h1>
              </div>
            </form>
          </div>
          <div className="float-right">
            <div className="block w-full max-w-[18rem] rounded-xl bg-slate-800 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-4  dark:border-white/10">
                The basal metabolic rate (BMR) is the energy required at rest in
                a moderate environment when the digestive system is inactive.
                It's like calculating the fuel consumption of a stationary car.
              </div>
              <ul className="w-full">
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">
                  In such a state, energy will be used only to maintain vital
                  organs, which include the heart, brain, kidneys, nervous
                  system, intestines, liver, lungs, sex organs, muscles, and
                  skin.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default BasalMetabolicRate;
