import React from "react";

function FitnessCalculatorsLandingPage() {
  return (
    <div className="w-full flex">
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `url(https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="text-8xl font-bold text-gray-200 mb-96">
          Click on a Calculator
        </h1>
      </div>
    </div>
  );
}

export default FitnessCalculatorsLandingPage;
