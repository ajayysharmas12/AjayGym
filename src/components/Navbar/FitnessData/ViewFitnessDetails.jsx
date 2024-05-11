import React, { useContext, useEffect, useState } from "react";
import { account, database } from "../../../appwrite/config";
import { Query } from "appwrite";
import { homeContext } from "../../Layout/Layout";
import Loader from "../../Layout/Loader";

function ViewFitnessDetails() {
  const { ContentLoader, toast, Bounce } = useContext(homeContext);
  const [accountEmail, setAccountEmail] = useState();
  const [fitnessData, setFitnessData] = useState();
  const [loaded, setLoaded] = useState(false);
  const dbId = import.meta.env.VITE_APPWRITE_DB_ID;
  const dbCollectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

  useEffect(() => {
    const fetchAccountEmail = async () => {
      try {
        const currentAccount = await account.get("current");
        setAccountEmail(currentAccount.email);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAccountEmail();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (accountEmail) {
          const response = await database.listDocuments(dbId, dbCollectionId, [
            Query.equal("email", [accountEmail]),
          ]);
          const updatedElement =
            response.documents[response.documents.length - 1];
          const convertData = JSON.parse(updatedElement.formData);
          setFitnessData(convertData);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoaded(true);
        toast.success("Data loaded successfully", {
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
    };

    if (accountEmail) {
      fetchData();
    }
  }, [accountEmail]);

  return (
    <div className="w-full h-full">
      <div
        className="w-full"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h1 className="text-5xl  font-bold text-green-600 float-left w-full transition-all hover:text-green-500 duration-1000 ease-in-out hover:tracking-wider hover:mr-5 m-8">
            View your fitness data
          </h1>
        </div>
        <div className=" text-white">
          {loaded ? (
            <div className="p-8 max-w-4xl mx-auto">
              <div className="mt-24 bg-slate-700 p-8 rounded-2xl">
                <div className="text-center mb-4">
                  <strong className="text-3xl text-yellow-500">
                    Your Fitness Data
                  </strong>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  <div className="border rounded-md p-4 hover:bg-green-800 bg-slate-800 transform hover:scale-105 transition-all duration-300">
                    <div className="text-center mb-2">
                      <strong>BMI:</strong> {fitnessData?.bmi}
                    </div>
                    <div className="text-center">
                      <strong>BFP:</strong> {fitnessData?.bfp}
                    </div>
                  </div>
                  <div className="border rounded-md p-4 bg-slate-800 hover:bg-green-800 transform hover:scale-105 transition-all duration-300">
                    <div className="text-center mb-2">
                      <strong>BMR:</strong> {fitnessData?.bmr}
                    </div>
                    <div className="text-center">
                      <strong>Macros:</strong> {fitnessData?.macros}
                    </div>
                  </div>
                </div>
                <div className="border rounded-md p-4 mt-4 bg-slate-800 hover:bg-green-800 transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <strong>Additional Comments:</strong>{" "}
                    {fitnessData?.comments}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center w-full h-full">{ContentLoader()}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewFitnessDetails;
