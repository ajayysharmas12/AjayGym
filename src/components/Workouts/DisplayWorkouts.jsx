import React, { useState } from "react";

function DisplayWorkouts({ item }) {
  const {
    bodyPart,
    equipment,
    name,
    target,
    secondaryMuscles,
    instructions,
    gifUrl,
  } = item;

  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mx-4 flex">
      <div className="border rounded-2xl hover:scale-110 transform ease-in-out transition p-4 mb-4">
        <h2 className="text-xl font-bold text-white mb-2">
          {bodyPart} Workout
        </h2>
        <p className="text-green-400">
          <span className="text-xl text-orange-400 "> Equipment</span>:
          {equipment}
        </p>
        <p className="text-green-400">
          <span className="text-xl text-orange-400 ">Workout type:</span> {name}
        </p>
        <p className="text-green-400">
          <span className="text-xl text-orange-400 ">Target Group: </span>
          {target}
        </p>
        <p className="text-green-400">
          <span className="text-xl text-orange-400 "> Secondary Muscles: </span>
          {secondaryMuscles.join(", ")}
        </p>
        <div className="text-green-400 ">
          <span className="text-xl text-orange-400 "> Instructions</span>:
          <ul>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          View GIF
        </button>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative bg-white rounded-lg shadow-lg">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-0 right-0 m-4 text-gray-700 cursor-pointer hover:text-gray-900"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <img src={gifUrl} alt="Workout GIF" className="rounded-t-lg" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayWorkouts;
