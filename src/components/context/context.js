import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import axios from "axios";

export const initstate = {
  tracks: [],
  heading: "Top 10 Tracks",
  loading: true,
  trackname: "",
};

//  "proxy": "https://api.musixmatch.com/ws/1.1",

const SEARCH_URL = `https://api.musixmatch.com/ws/1.1/track.search?page_size=10&page=1&f_has_lyrics=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`;

export let Context = createContext();

export const Provider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initstate);
  useEffect(() => {
    axios
      .get(SEARCH_URL, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        params: { q: state.trackname },
      })
      .then((res) => {
        dispatch({
          type: "fetchtracks",
          payload: res.data.message.body.track_list,
        });
      })
      .catch((err) => console.log(err));
  }, [state.trackname]);

  return (
    <Context.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </Context.Provider>
  );
};
