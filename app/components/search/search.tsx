"use client";
import React from "react";
import classes from "./search.module.css";
import useSearchDataStore from "../../../store/searchDataStore";
import { IData } from "@/app/interfaces/IRequest";

interface IType {
  setSearchData: (data: IData) => void;
}

const Search = () => {
  const setAudiobookData = useSearchDataStore(
    (state: any) => state.setSearchAudiobookData
  );
  const setPodcastData = useSearchDataStore(
    (state: any) => state.setSearchPodcastData
  );
  const setMovieData = useSearchDataStore(
    (state: any) => state.setSearchMovieData
  );
  const onChange = (event: any) => {
    handleSearch(event.target.value);
  };
  const onKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSearch(event.target.value);
    }
  };
  const handleSearch = (v: string) => {
    handleGetItunesAudiobookSearch(v);
    handleGetItunesPodcastSearch(v);
    handleGetItunesMovieSearch(v);
  };
  const handleGetItunesAudiobookSearch = async (v: string) => {
    const res = await fetch(
      `http://localhost:4000/search-itunes?term=${v || "all"}&media=audiobook`
    );
    const value = await res.json();
    setAudiobookData(value.results);
  };
  const handleGetItunesPodcastSearch = async (v: string) => {
    const res = await fetch(
      `http://localhost:4000/search-itunes?term=${v || "all"}&media=podcast`
    );
    const value = await res.json();
    setPodcastData(value.results);
  };
  const handleGetItunesMovieSearch = async (v: string) => {
    const res = await fetch(
      `http://localhost:4000/search-itunes?term=${v || "all"}&media=movie`
    );
    const value = await res.json();
    setMovieData(value.results);
  };
  return (
    <form className="w-full" onSubmit={(event) => event.preventDefault()}>
      <input
        className={classes.search}
        type="text"
        name="search"
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Search through over 70 million podcasts and episodes..."
      />
    </form>
  );
};

export default Search;
