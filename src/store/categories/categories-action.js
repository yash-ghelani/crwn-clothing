import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { CATEGORIES_ACTION_TYPES } from "./categories-types";

export const fetchCategoriesStart = () => {
  return { type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const fetchCategoriesFailed = (error) => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    payload: error,
  };
};

export const fetchCategoriesAsync = () => async (dispatch) => {
  // trigger fetch, set loading state to true
  dispatch(fetchCategoriesStart());

  try {

    // try and fetch categories from firestore
    const categoriesArray = await getCategoriesAndDocuments("categories");

    // set categories if successful and set loading state to false
    dispatch(fetchCategoriesSuccess(categoriesArray));

  } catch (error) {

    // set error if unsuccessful and set loading state to false
    dispatch(fetchCategoriesFailed(error));

  }
};
