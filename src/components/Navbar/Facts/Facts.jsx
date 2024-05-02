import React from "react";
function Facts() {
  return (
    <>
      <div className="flex w-full">
        <div
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1709976142888-6dc0ed1ed78c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="mt-24 text-end">
            <p className="text-4xl font-bold text-gray-200 hover:text-5xl w-2/5 hover:text-zinc-400 transition-transform duration-1000 ">
              Get helpful facts just for you
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Facts;
