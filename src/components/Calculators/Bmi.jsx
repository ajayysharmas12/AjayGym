import React, { useContext, useState } from "react";
import { homeContext } from "../Layout/Layout";

function Bmi() {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
  });
  const { toast, ToastContainer, Bounce, Loader } = useContext(homeContext);
  const [getBMI, setGetBMI] = useState(null);

  const handleCalculate = () => {
    if (
      formData.gender === "" ||
      formData.age === "" ||
      formData.weight === "" ||
      formData.height === ""
    ) {
      toast.error("Fill All Fields!", {
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
      return;
    } else {
      const { weight, height } = formData;

      const heightInMeters = height / 100;

      const bmi = weight / (heightInMeters * heightInMeters);

      console.log("BMI:", bmi);
      const valueCorrect = bmi.toFixed(2);
      setGetBMI(valueCorrect);
      toast.success("BMI Calculated !", {
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

  const BmiDesc = () => {
    if (getBMI === null) {
      return "BMI yet to calculate";
    } else if (getBMI < 18.5) {
      return "Underweight";
    } else if (getBMI >= 18.5 && getBMI <= 24.9) {
      return "Normal";
    } else if (getBMI >= 25 && getBMI <= 29.9) {
      return "Overweight";
    } else if (getBMI >= 30) {
      return "Obese";
    }
  };

  return (
    <>
      <div className="w-full flex">
        <div
          style={{
            minHeight: "100vh",
            width: "100%",
            backgroundImage: `url(https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              <h1 className="text-xl font-bold mb-4">BMI CALCULATOR</h1>
              <label htmlFor="gender" className="block">
                Gender
              </label>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
                <label htmlFor="male" className="m-2">
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
                <label htmlFor="female" className="m-2">
                  Female
                </label>
              </div>
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
                <h1>Your BMI: {getBMI}</h1>
                <h2>you're: {BmiDesc()}</h2>
              </div>
            </form>
          </div>
          <div className="float-right">
            <div className="block w-full max-w-[18rem]  rounded-xl bg-slate-800 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-4  dark:border-white/10">
                BMI Reference
              </div>
              <ul className="w-full">
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">
                  Severe Thinness - 16
                </li>
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">
                  Mild Thinness 17 - 18.5
                </li>
                <li className="w-full px-4 py-3 border-b-2 border-neutral-100 border-opacity-100 dark:border-white/10 ">
                  Normal 18.5 - 25
                </li>
                <li className="w-full px-4 py-3 border-b-2 border-neutral-100 border-opacity-100 dark:border-white/10 ">
                  Overweight 25 - 30
                </li>
                <li className="w-full px-4 py-3 border-b-2 border-neutral-100 border-opacity-100 dark:border-white/10 ">
                  Obese 30+
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

export default Bmi;
