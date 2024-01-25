import { createSlice, configureStore } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "default state",
  initialState: {
    rock: [],
    pop: [],
    hiphop: [],
    searchResults: [],
    currentSong: null
  },
  reducers: {
    setRock: (state, { payload, type }) => {
      state.rock = [...payload];
    },
    setPop: (state, { payload, type }) => {
      state.pop = [...payload];
    },
    setHiphop: (state, { payload, type }) => {
      state.hiphop = [...payload];
    },
    setSearchResults: (state, { payload, type }) => {
      state.searchResults = [...payload];
    },
    setCurrentSong: (state, { payload }) => {
      state.currentSong = payload;
    }
  },
});

export const { setRock, setHiphop, setPop, setSearchResults, setCurrentSong } = storeSlice.actions;

const store = configureStore({
  reducer: storeSlice.reducer,
});

export default store;
