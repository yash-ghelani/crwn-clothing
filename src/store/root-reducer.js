import { combineReducers } from "redux";

import { userReducer } from "./user/user-reducer";
import { categoriesReducer } from "./categories/categories-reducer";

// takes an object of reducers and combines into a single root reducer
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
})
