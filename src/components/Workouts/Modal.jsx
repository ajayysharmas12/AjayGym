import React from "react";

function Modal({ item, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 z-10">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{item.name}</h2>
        <iframe
          title={item.name}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${item.videoId}`}
          frameBorder="0"
          allowFullScreen
          className="w-full"
        ></iframe>
        {/* Display other workout details if needed */}
      </div>
    </div>
  );
}

export default Modal;
