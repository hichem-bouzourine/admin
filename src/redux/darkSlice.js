import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "dark",
  initialState: {
    dark: false,
  },
  reducers: {
    setDark: (state) => {
      state.dark = true;
    },
    setLight: (state) => {
      state.dark = false;
    },
    switchMode: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { setDark, setLight, switchMode } = darkSlice.actions;
export default darkSlice.reducer;
