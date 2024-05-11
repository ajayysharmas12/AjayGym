import React, { useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import DisplayWorkouts from "./DisplayWorkouts";
import { FaTrash } from "react-icons/fa";
import { homeContext } from "../Layout/Layout";

function WorkoutItems({ getData }) {
  const [searchParams, setSearchParams] = useState({
    Muscles: "",
    quantity: "",
  });
  const { toast, ToastContainer, Bounce, ContentLoader } =
    useContext(homeContext);
  const [formData, setFormData] = useState([]); // Initialize formData as an empty array
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => {
      return { ...prevParams, [name]: value };
    });
  };

  const handleSearch = async (e) => {
    if (e) {
      e.preventDefault();
    }

    setLoading(true);

    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchParams.Muscles}?limit=${searchParams.quantity}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fd5f052ca0msh17df6414e90e622p12a46djsndd703d160c9c",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const jsonData = JSON.parse(result);
      setFormData(jsonData);
      toast.success("Workouts found!! ", {
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
      getData(e);
    } catch (error) {
      toast.error("No Data found!! ", {
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
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const clearInputFields = () => {
    setSearchParams({
      Muscles: "",
      quantity: "",
    });

    setFormData([]);
  };

  return (
    <>
      <div className="p-5 ">
        <h1 className="text-2xl text-white font-bold mb-4">Workouts</h1>
        <div className="flex flex-wrap space-x-4 mb-4 ">
          <form onSubmit={handleSearch} className="items-center">
            <input
              type="text"
              required
              name="Muscles"
              placeholder="Muscle Group"
              value={searchParams.Muscles.toLowerCase()}
              onChange={handleInputChange}
              className="border rounded-md p-2 m-2 w-full sm:w-auto"
            />
            <input
              type="number"
              required
              name="quantity"
              placeholder="Search Quantity"
              value={searchParams.quantity}
              onChange={handleInputChange}
              className="border rounded-md p-2 m-2 w-full sm:w-auto"
            />
            <div className="flex items-center">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-xl p-2 px-4 w-full sm:w-auto"
              >
                Search
              </button>
              <button
                type="button"
                className="ml-2 p-2 bg-slate-800 rounded-xl text-white flex items-center"
                onClick={clearInputFields}
              >
                <span>Clear</span>
                <span className="ml-1">
                  <FaTrash />
                </span>
              </button>
            </div>
          </form>
        </div>
        <div>
          {loading ? (
            <div className="flex float-right mr-24">{ContentLoader()}</div>
          ) : (
            <div className="grid grid-cols-2 gap-4 p-2 m-4 mt-8">
              {/* Check if formData is an array before mapping */}
              {Array.isArray(formData) &&
                formData.map((item) => (
                  <DisplayWorkouts key={nanoid()} item={item} />
                ))}
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default WorkoutItems;
