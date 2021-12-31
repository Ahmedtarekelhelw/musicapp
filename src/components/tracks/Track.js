import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Track({ track }) {
  return (
    <>
      <div className="col-lg-6">
        <div className="card p-3">
          <h4>{track.artist_name}</h4>
          <ul className="list-unstyled">
            <li className="card-text">
              <strong>
                <FontAwesomeIcon icon="play" size="sm" className="me-1" />
                Track :{" "}
              </strong>
              {track.track_name}
            </li>
            <li className="card-text">
              <strong>
                <FontAwesomeIcon
                  icon="record-vinyl"
                  size="sm"
                  className="me-1"
                />
                Album :{" "}
              </strong>
              {track.album_name}
            </li>
          </ul>
          <Link
            className="btn btn-dark fw-bold"
            to={`/track-details/${track.track_id}`}
          >
            <FontAwesomeIcon icon="chevron-right" className="me-1" />
            View details
          </Link>
        </div>
      </div>
    </>
  );
}
