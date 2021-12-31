import React, { useContext } from "react";
import { Context } from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchForm() {
  let { dispatch } = useContext(Context);

  let onsubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "search", payload: e.target.track_name.value });
  };

  return (
    <div className="border w-75 mx-auto p-4">
      <div className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon="music" size="4x" />
        <h1 className="ms-3 mb-0">Search For A Song</h1>
      </div>
      <p className="text-center mb-4">Get The lyrics for any track</p>
      <form className="mx-auto" onSubmit={onsubmit}>
        <input
          type="text"
          // onChange={(e) =>
          //   dispatch({ type: "search", payload: e.target.value })
          // }
          placeholder="Search For Your Track Lyrics"
          className="form-control mb-3"
          name="track_name"
        />
        <input type="submit" value="Search" className="btn btn-primary w-100" />
      </form>
    </div>
  );
}
