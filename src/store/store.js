import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// middlewares are small libraries/logic
// applied before actions hit the reducers
const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares))

// the store only needs a rootReducer
// we add the extra params to visualise the store
export const store = createStore(rootReducer, undefined, composedEnhancers)
