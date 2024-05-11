import React, { useContext, useEffect, useState } from "react";
import { ID } from "appwrite";
import { database } from "../../../appwrite/config";
import { homeContext } from "../../Layout/Layout";

function FitnessDetails() {
  const { emailName, toast, Bounce, ToastContainer } = useContext(homeContext);
  const [formData, setFormData] = useState({
    bmi: "",
    bfp: "",
    bmr: "",
    macros: "",
    comments: "",
  });

  const dbId = import.meta.env.VITE_APPWRITE_DB_ID;
  const dbCollectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      (formData.bmi ||
        formData.bfp ||
        formData.bmr ||
        formData.macros ||
        formData.comments) == ""
    ) {
      return toast.error("Please fill all the fields", {
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
      const formDataString = JSON.stringify(formData);
      try {
        const response = await database.createDocument(
          dbId,
          dbCollectionId,
          ID.unique(),
          {
            email: emailName,
            formData: formDataString,
          }
        );
        console.log(response);
        toast.success("Data saved successfully", {
          position: "top-right",
          autoClose: 2800,
          hideProgressBar: false,
          closeOnClick: true,
          // pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setFormData({
          bmi: "",
          bfp: "",
          bmr: "",
          macros: "",
          comments: "",
        });
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetForm = () => {
    setFormData({
      bmi: "",
      bfp: "",
      bmr: "",
      macros: "",
      comments: "",
    });
  };

  return (
    <>
      <div
        className="w-full"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-full">
          <h1 className="border-2 border-yellow-500 text-2xl w-2/5 p-2 text-center rounded-xl font-bold uppercase text-green-500 m-2 mb-8 bg-slate-900">
            ENTER THE DETAILS BELOW TO KEEP RECORD OF YOUR HEALTH to save it YOU
            CAN ALWAYS UPDATE IT later
          </h1>
          <div className="text-whit p-8 text-center max-w-4xl mx-auto bg-slate-800 border-2 border-orange-500 rounded-xl">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap items-center justify-between">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <h1 className="text-xl text-green-500 font-bold m-2">
                    Enter your BMI:
                  </h1>
                </div>
                <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4">
                  <input
                    name="bmi"
                    value={formData.bmi}
                    onChange={handleChange}
                    type="text"
                    className="w-full h-10 border-2 border-white text-black m-2 p-2"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <h1 className="text-xl text-green-500 font-bold m-2">
                    Enter your Body Fat Percentage:
                  </h1>
                </div>
                <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4">
                  <input
                    name="bfp"
                    value={formData.bfp}
                    onChange={handleChange}
                    type="text"
                    className="w-full h-10 border-2 border-white text-black m-2 p-2"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <h1 className="text-xl text-green-500 font-bold m-2">
                    Enter your BMR:
                  </h1>
                </div>
                <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4">
                  <input
                    name="bmr"
                    value={formData.bmr}
                    onChange={handleChange}
                    type="text"
                    className="w-full h-10 border-2 border-white text-black m-2 p-2"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <h1 className="text-xl text-green-500 font-bold m-2">
                    Enter your Macros in detail:
                  </h1>
                </div>
                <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4">
                  <input
                    name="macros"
                    value={formData.macros}
                    onChange={handleChange}
                    type="text"
                    className="w-full h-10 border-2 border-white text-black m-2 p-2"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <h1 className="text-xl text-green-500 font-bold m-2">
                    Enter additional comments in detail:
                  </h1>
                </div>
                <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 flex items-center">
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    cols="30"
                    rows="10"
                    className="w-full h-14 border-2 border-white text-black ml-auto p-2"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="m-2 p-2 bg-green-500 text-white"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="m-2 p-2 bg-green-500 text-white"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default FitnessDetails;
