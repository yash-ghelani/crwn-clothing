import { CATEGORY_ACTION_TYPES } from "./category-types";

export const setCategories = (categoryArray) => {
  return {type: CATEGORY_ACTION_TYPES.SET_CATEGORIES, payload: categoryArray}
}
