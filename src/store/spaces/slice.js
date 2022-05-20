import { createSlice } from "@reduxjs/toolkit";

const initialState = { allSpaces: [], loading: true };

export const spacesSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    fetchSpacesSuccess: (state, action) => {
      state.allSpaces = [...state.allSpaces, ...action.payload];
    },
    appLoad: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { fetchSpacesSuccess, appLoad } = spacesSlice.actions;
export default spacesSlice.reducer;
