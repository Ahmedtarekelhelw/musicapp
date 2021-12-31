import { useContext } from "react";
import Track from "./Track";
import { Context } from "../context/context";

export default function Tracks() {
  let { state } = useContext(Context);

  return (
    <>
      <h3 className="text-center mt-5 mb-4">{state.heading}</h3>
      <div className="row g-3 mx-auto w-75">
        {state.tracks !== undefined && state.tracks.length !== 0 ? (
          state.tracks.map((track) => {
            return <Track track={track.track} key={track.track.track_id} />;
          })
        ) : (
          <h5 className="text-center">Please Enter a Valid Search Word </h5>
        )}
      </div>
    </>
  );
}
