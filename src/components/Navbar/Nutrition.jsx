import React, { useContext, useEffect, useState } from "react";
import { homeContext } from "../Layout/Layout";
const Nutrition = () => {
  const [query, setQuery] = useState("");
  const { toast, ToastContainer, Bounce, ContentLoader } =
    useContext(homeContext);
  const [nutritionData, setNutritionData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    fetchNutritionData();
  };

  const fetchNutritionData = async () => {
    const apiKey = "YhNPoHnVl5E7890IgPQ/gg==SG3PDsf01WHFQ72Y";
    const apiUrl = `https://api.api-ninjas.com/v1/nutrition?query=${query}`;

    setIsLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("no food item in the database", data);
      setNutritionData(data);
      if (data.length === 0) {
        toast.error("No Data!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } else {
        toast.success("Nutrition data fetched successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (error) {
      if (
        error == "TypeError: Failed to fetch" ||
        "Failed to load resource: net::ERR_CONNECTION_TIMED_OUT"
      ) {
        toast.error("Network Error!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "coloured",
          transition: Bounce,
        });
      }
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <aside className="flex h-vh w-60 flex-col overflow-y-auto border-r border-slate-400 bg-white px-5 py-8">
        <a href="#">
          <svg
            width="40"
            height="46"
            viewBox="0 0 50 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
              fill="black"
            ></path>
          </svg>
        </a>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-2 text-xs font-semibold uppercase text-gray-900">
                Searching Effectively
              </label>
              <a href="#" className="flex items-center space-x-3 px-3 text-sm">
                <ul className="space-y-6">
                  <li>
                    You can simply type like <br />1 cup egg 100ml milk 100grams
                    chicken 20 grams flour <br />
                    at the same time
                  </li>
                  <li>Note that you can type multiple items</li>
                  <li>
                    Do not add any kind of special characters between two items{" "}
                  </li>
                  <li>
                    It is powered by natural language processors (NLP) which can
                    take multiple inputs at the same time
                  </li>
                </ul>
              </a>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          maxWidth: "100%",
          backgroundAttachment: "fixed",
        }}
        className={`container text-center bg-center bg-cover h-${
          nutritionData.length >= 2 ? "full" : "screen"
        }`}
      >
        <div className="text-2xl font-bold float-start text-slate-200 mt-4 mb-4 ml-4">
          Nutritional Information
        </div>
        <div className="flex justify-center items-center mb-4 w-full">
          <input
            className="border border-gray-300 p-2 w-2/5 mr-2"
            type="text"
            placeholder="Enter food Items...1kg Dal 500grams chicken 20grams greek yoghurt 2oz of bread"
            value={query}
            onChange={handleQueryChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Get Data
          </button>
        </div>
        {nutritionData.length >= 1 && (
          <div className="block w-full max-w-[18rem] mt-24 float-right rounded-xl bg-slate-800 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="border-b-2 border-neutral-100 border-opacity-100 p-4  dark:border-white/10">
              Macros Required
            </div>
            <ul className="w-full">
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">
                Protein - 0
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">
                Carbohydrates - 0
              </li>
              <li className="w-full px-4 py-3 border-b-2 border-neutral-100 border-opacity-100 dark:border-white/10 ">
                Fats - 0
              </li>
            </ul>
          </div>
        )}
        {isLoading ? (
          ContentLoader()
        ) : (
          <div>
            {nutritionData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 mb-4 w-5/12 rounded-2xl ml-10 p-1"
              >
                <h2 className="text-lg font-bold bg-slate-400 p-2 rounded-t-2xl">
                  {item.name}
                </h2>
                <div className="grid grid-cols-2 gap-2 bg-zinc-200 rounded-b-xl p-1">
                  <span className="font-semibold">Serving Size (g):</span>
                  <span>{item.serving_size_g}</span>
                  <span className="font-semibold">Calories:</span>
                  <span>{item.calories}</span>
                  <span className="font-semibold">Total Fat (g):</span>
                  <span>{item.fat_total_g}</span>
                  <span className="font-semibold">Saturated Fat (g):</span>
                  <span>{item.fat_saturated_g}</span>
                  <span className="font-semibold">Protein (g):</span>
                  <span>{item.protein_g}</span>
                  <span className="font-semibold">Sodium (mg):</span>
                  <span>{item.sodium_mg}</span>
                  <span className="font-semibold">Potassium (mg):</span>
                  <span>{item.potassium_mg}</span>
                  <span className="font-semibold">Cholesterol (mg):</span>
                  <span>{item.cholesterol_mg}</span>
                  <span className="font-semibold">
                    Total Carbohydrates (g):
                  </span>
                  <span>{item.carbohydrates_total_g}</span>
                  <span className="font-semibold">Fiber (g):</span>
                  <span>{item.fiber_g}</span>
                  <span className="font-semibold">Sugar (g):</span>
                  <span>{item.sugar_g}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Nutrition;
