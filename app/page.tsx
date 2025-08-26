"use client";
import Slider from "./components/slider/slider";
import Layout from "./components/layout/layout";
import useSearchDataStore from "@/store/searchDataStore";
import { useEffect, useState } from "react";

const Home = () => {
  const searchAudiobookData = useSearchDataStore(
    (state: any) => state.searchAudiobookData
  );
  const searchPodcastData = useSearchDataStore(
    (state: any) => state.searchPodcastData
  );
  const searchMovieData = useSearchDataStore(
    (state: any) => state.searchMovieData
  );
  const [data, setData] = useState([]);
  const [podcastData, setPodcastData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  const handleGetItunesAudiobookData = async () => {
    const res = await fetch(
      `http://localhost:4000/search-itunes?term=all&media=audiobook`
    );
    const value = await res.json();
    setData(value.results);
  };
  const handleGetItunesPodcastData = async () => {
    const res = await fetch(
      `http://localhost:4000/search-itunes?term=all&media=podcast`
    );
    const value = await res.json();
    setPodcastData(value.results);
  };
  const handleGetItunesMovieData = async () => {
    const res = await fetch(
      `http://localhost:4000/search-itunes?term=all&media=movie`
    );
    const value = await res.json();
    setMovieData(value.results);
  };
  useEffect(() => {
    handleGetItunesAudiobookData();
    handleGetItunesPodcastData();
    handleGetItunesMovieData();
  }, []);

  return (
    <Layout>
      <Slider
        title={"audiobooks"}
        data={
          searchAudiobookData && searchAudiobookData.length > 0
            ? searchAudiobookData
            : data
        }
      />
      <Slider
        title={"podcasts"}
        data={
          searchPodcastData && searchPodcastData.length > 0
            ? searchPodcastData
            : podcastData
        }
      />
      <Slider
        title={"movies"}
        data={
          searchMovieData && searchMovieData.length > 0
            ? searchMovieData
            : movieData
        }
      />
    </Layout>
  );
};
export default Home;
