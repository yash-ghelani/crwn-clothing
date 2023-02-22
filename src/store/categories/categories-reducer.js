import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    setCategoriesStart: (state) => {
      state.isLoading = true;
    },
    setCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    setCategoriesFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  setCategoriesStart,
  setCategoriesSuccess,
  setCategoriesFailure,
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
