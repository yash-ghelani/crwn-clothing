import { CATEGORY_ACTION_TYPES } from "./category-types";

export const setCategoryMap = (categoryMap) => {
  return {type: CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, payload: categoryMap}
}
