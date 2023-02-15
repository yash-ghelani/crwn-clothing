import { combineReducers } from "redux";

import { userReducer } from "./user/user-reducer";
import { categoriesReducer } from "./categories/categories-reducer";
import { cartReducer } from "./cart/cart-reducer";

// takes an object of reducers and combines into a single root reducer
export const rootReducer = combineReducers({
  user_state: userReducer,
  categories_state: categoriesReducer,
  cart_state: cartReducer,
})
