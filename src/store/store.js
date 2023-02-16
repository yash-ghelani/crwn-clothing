import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// middlewares are small libraries/logic
// applied before actions hit the reducers
const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares))

const persistConfig = {
  key: 'root', // where to start - root means start from the top
  storage, // will use localStorage in the browser
  blacklist: ['user'], // values we dont want to persist
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

// the store only needs a rootReducer
// we add the extra params to visualise the store
export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store);
