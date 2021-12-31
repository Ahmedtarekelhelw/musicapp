import SearchForm from "../tracks/SearchForm";
import Tracks from "../tracks/Tracks";
import Spinner from "./Spinner";
import React, { useContext } from "react";
import { Context } from "../context/context";

export default function Index() {
  let { state } = useContext(Context);
  return (
    <>
      <SearchForm />
      {state.loading ? <Spinner /> : <Tracks />}
    </>
  );
}
