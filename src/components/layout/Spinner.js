import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading...."
      style={{ width: "200px", height: "200px" }}
      className="d-block mx-auto"
    />
  );
}
