import { createSlice } from "@reduxjs/toolkit";

export interface RootState {
  darkMode: boolean;
}

const initialState: RootState = {
  darkMode: false,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = rootSlice.actions;

export default rootSlice.reducer;
