import React from "react";
function FitnessData() {
  return (
    <>
      <div
        className="w-full"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1445384763658-0400939829cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div>
          <h4 className="text-4xl font-bold text-green-600 float-right w-2/5 transition-all hover:text-green-500 duration-1000 ease-in-out hover:tracking-wider hover:mr-5">
            Your fitness journey is incomplete without keeping tabs on your
            training data.
            <br /> Fill in your training data
          </h4>
        </div>
      </div>
    </>
  );
}

export default FitnessData;
