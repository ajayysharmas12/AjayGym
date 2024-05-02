import React from "react";
import { useSearchParams } from "react-router-dom";
function Verify() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const secret = urlParams.get("secret");
  return <div>Verify</div>;
}

export default Verify;
