import { createSelector } from "reselect";

// this gives us the categories state - categoriesSlice
const selectCategoriesState = (state) => state.categories_state;

export const selectCategories = createSelector(
  // input selector - checks if state has changed
  [selectCategoriesState],
  // output selector - fetches new state if it is different
  (categories_state) => categories_state.categories
);

export const selectCategoriesMap = createSelector(
  // input selector - checks if categories have changed
  [selectCategories],
  //output selector - remaps categories if changed
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
