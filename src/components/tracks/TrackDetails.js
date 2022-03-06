import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";
import moment from "moment";

const Lyrics_URL = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${process.env.REACT_APP_API_KEY}`;
const Track_URL = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?apikey=${process.env.REACT_APP_API_KEY}`;

export default function TrackDetails() {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(Lyrics_URL, {
        params: { track_id: id },
      })
      .then((res) => {
        setLyrics(res.data.message.body.lyrics);
        return axios.get(Track_URL, {
          params: { track_id: id },
        });
      })
      .then((res) => {
        setTrack(res.data.message.body.track);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link className="btn btn-dark btn-sm" to="/musicapp/">
            Go Back
          </Link>
          <div className="card my-4">
            <div className="card-header h4">
              {track ? track.track_name : "Not avaliable"} By{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </div>
            <div className="card-body">
              <p className="card-text"></p>
              {lyrics ? lyrics.lyrics_body : "There is Lyric Not Available"}
            </div>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Album ID : </strong> {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre : </strong>{" "}
              {track.primary_genres.music_genre_list.length
                ? track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name
                : "Music"}
            </li>
            <li className="list-group-item">
              <strong>Explicit Words : </strong> {track.explicit ? "Yes" : "No"}
            </li>
            <li className="list-group-item">
              <strong>First Release Date : </strong>{" "}
              {moment(track.updated_time).format("DD/MM/YYYY")}
            </li>
          </ul>
        </>
      )}
    </>
  );
}
