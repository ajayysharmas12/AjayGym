import React from "react";

function LoginLinkPage() {
  return (
    <>
      <div
        className="w-full  flex justify-center items-center"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(https://images.unsplash.com/photo-1648634362534-238cb091708b?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "2rem",
          }}
          className=" text-black opacity-85 text-center border-2 text-2xl border-orange-500 rounded-2xl p-8 m-2"
        >
          Verification email sent.
          <br />
          Check your email inbox.
          <br />
          Click on the link in the email to login to your account.
        </div>
      </div>
    </>
  );
}

export default LoginLinkPage;
