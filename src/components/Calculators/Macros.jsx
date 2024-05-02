import { useContext, useState } from "react";
import { homeContext } from "../Layout/Layout";

function Macros() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",
    goal: "",
  });

  const { toast, ToastContainer, Bounce, Loader } = useContext(homeContext);
  const [tdee, setTdee] = useState(null);
  const [protein, setProtein] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [fat, setFat] = useState(null);

  const handleCalculate = () => {
    const { age, gender, height, weight, activityLevel, goal } = formData;
    if (
      age === "" ||
      gender === "" ||
      height === "" ||
      weight === "" ||
      activityLevel === "" ||
      goal === ""
    ) {
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
      let bmr;
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else if (gender === "female") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      } else {
        // Handle other gender options
        // You can use default values or display an error message
        return;
      }

      // Adjust BMR based on activity level
      let activityMultiplier;
      switch (activityLevel) {
        case "sedentary":
          activityMultiplier = 1.2;
          break;
        case "lightly_active":
          activityMultiplier = 1.375;
          break;
        case "moderately_active":
          activityMultiplier = 1.55;
          break;
        case "very_active":
          activityMultiplier = 1.725;
          break;
        case "extra_active":
          activityMultiplier = 1.9;
          break;
        default:
          // Handle invalid activity level
          return;
      }

      // Calculate TDEE based on activity level and goal
      let calculatedTdee;
      switch (goal) {
        case "lose_weight":
          calculatedTdee = bmr * activityMultiplier - 500;
          break;
        case "maintain_weight":
          calculatedTdee = bmr * activityMultiplier;
          break;
        case "gain_weight":
          calculatedTdee = bmr * activityMultiplier + 500;
          break;
        default:
          // Handle invalid goal
          return;
      }

      // Calculate macros based on TDEE
      const calculatedProtein = 2.2 * weight; // Protein = 2.2g per kg of body weight
      const calculatedCarbs = (calculatedTdee * 0.5) / 4; // 50% of total calories from carbs
      const calculatedFat = (calculatedTdee * 0.3) / 9; // 30% of total calories from fat

      // Update state with calculated values
      setTdee(calculatedTdee.toFixed(2));
      setProtein(calculatedProtein.toFixed(2));
      setCarbs(calculatedCarbs.toFixed(2));
      setFat(calculatedFat.toFixed(2));
      toast.success("Calculated Macros!", {
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
            className="w-96 text-black border-2 border-black  p-2 mb-24 mr-24"
            style={{
              boxShadow: "rgba(200, 200, 200, 1.4) 0px 0px 24px",
              borderRadius: "14px",
              background: "rgba(0, 0, 0, 0.5)", // Add background color with opacity
            }}
          >
            <h1 className="text-xl font-bold mb-4 text-white">
              MACRO CALCULATOR
            </h1>
            <form className="flex flex-col">
              <label htmlFor="age" className="text-white">
                Age
              </label>
              <input
                id="age"
                className="border-black border-2 rounded-md mb-2"
                type="number"
                min="18"
                max="80"
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
              />

              {/* Gender */}
              <label htmlFor="gender" className="text-white">
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
                <label htmlFor="male" className="text-white m-2">
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
                <label htmlFor="female" className="text-white m-2">
                  Female
                </label>
              </div>

              {/* Height */}
              <label htmlFor="height" className="text-white">
                Height (cm)
              </label>
              <input
                id="height"
                className="border-black border-2 rounded-md mb-2"
                type="number"
                min="100"
                max="250"
                onChange={(e) =>
                  setFormData({ ...formData, height: e.target.value })
                }
              />

              {/* Weight */}
              <label htmlFor="weight" className="text-white">
                Weight (kg)
              </label>
              <input
                id="weight"
                className="border-black border-2 rounded-md mb-2"
                type="number"
                min="30"
                max="200"
                onChange={(e) =>
                  setFormData({ ...formData, weight: e.target.value })
                }
              />

              {/* Activity Level */}
              <label htmlFor="activityLevel" className="text-white">
                Activity Level
              </label>
              <select
                id="activityLevel"
                className="border-black border-2 rounded-md mb-2"
                onChange={(e) =>
                  setFormData({ ...formData, activityLevel: e.target.value })
                }
              >
                <option value="">Select activity level</option>
                <option value="sedentary">
                  Sedentary (little / no exercise)
                </option>
                <option value="lightly_active">
                  Lightly Active (1-3 days/week)
                </option>
                <option value="moderately_active">
                  Moderately Active (3-4 days/week)
                </option>
                <option value="very_active">
                  Very Active (4-5 times/week)
                </option>
                <option value="extra_active">
                  Extra Active (5-6 days/week)
                </option>
              </select>

              {/* Goal */}
              <label htmlFor="goal" className="text-white">
                Your Goal
              </label>
              <select
                id="goal"
                className="border-black border-2 rounded-md mb-2"
                onChange={(e) =>
                  setFormData({ ...formData, goal: e.target.value })
                }
              >
                <option value="">Select your goal</option>
                <option value="lose_weight">
                  Lose Weight (0.25 to 0.50) kg / week
                </option>
                <option value="maintain_weight">Maintain Weight</option>
                <option value="gain_weight">
                  Gain Weight (0.5) kg / week{" "}
                </option>
              </select>

              <button
                type="button"
                onClick={() => handleCalculate()}
                className="block bg-slate-400 border-2 p-2 mt-4 text-white"
              >
                Calculate
              </button>
            </form>

            {/* Display TDEE and macros */}
            {tdee && (
              <div className="mt-4">
                <h2 className="text-white">
                  Your Total Daily Energy Expenditure (TDEE) is: {tdee} kcal/day
                  to aim the goal
                </h2>
                <h2 className="text-white">
                  Protein: {protein}g, <br />
                  Carbs: {carbs}g, <br />
                  Fat: {fat}g
                </h2>
              </div>
            )}
          </div>
          <div className="float-right">
            <div className="block w-full max-w-[18rem]  rounded-xl bg-slate-800 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-4  dark:border-white/10">
                A macro calculator is a helpful tool for tailoring your diet to
                meet your health and fitness goals.
              </div>
              <ul className="w-full">
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">
                  It provides personalized recommendations based on your needs
                </li>
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">
                  It helps you maintain a balanced diet, optimize performance,
                  and manage weight effectively.
                </li>
                <li className="w-full px-4 py-3 border-b-2 border-neutral-100 border-opacity-100 dark:border-white/10 ">
                  It's both educational and flexible, allowing you to make
                  informed choices about your nutrition.
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

export default Macros;
