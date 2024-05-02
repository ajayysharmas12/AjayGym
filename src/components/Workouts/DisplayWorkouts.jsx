import React from "react";

function DisplayWorkouts({ item }) {
  return (
    <div className="mx-4">
      <div className="border rounded-2xl hover:scale-110 transform ease-in-out transition p-4 mb-4 ">
        <h2 className="text-xl text-white font-bold mb-2">{item.WorkOut}</h2>
        <p className="text-gray-200">Muscles: {item.Muscles}</p>
        <p className="text-gray-200">Equipment: {item.Equipment}</p>
        <p className="text-gray-200">Intensity Level: {item.Intensity_Level}</p>
        <p className="text-gray-200">Explanation: {item.Explaination}</p>
        <p className="text-gray-200">
          Long Explanation: {item["Long Explanation"]}
        </p>
        {/* Render a link to YouTube search results for the workout name */}
        <p className="text-blue-500">
          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
              item.WorkOut
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Search for {item.WorkOut} on YouTube
          </a>
        </p>
      </div>
    </div>
  );
}

export default DisplayWorkouts;
