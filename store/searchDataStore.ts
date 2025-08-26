import { IData } from "@/app/interfaces/IRequest";
import { create } from "zustand";

const useSearchDataStore = create((set) => ({
  searchAudiobookData: [],
  searchPodcastData: [],
  searchMovieData: [],
  setSearchAudiobookData: (data: IData) =>
    set(() => ({ searchAudiobookData: data })),
  setSearchPodcastData: (data: IData) =>
    set(() => ({ searchPodcastData: data })),
  setSearchMovieData: (data: IData) => set(() => ({ searchMovieData: data })),
}));
export default useSearchDataStore;
