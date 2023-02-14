import { combineReducers } from "redux";

import { userReducer } from "./user/user-reducer";
import { categoryReducer } from "./category/category-reducer";

// takes an object of reducers and combines into a single root reducer
export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
})
