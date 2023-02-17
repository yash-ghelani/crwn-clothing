import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk"

import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// middlewares are small libraries/logic
// applied before actions hit the reducers
const middlewares = [process.env.NODE_ENV !== "production" && logger, thunk].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const persistConfig = {
  key: "root", // where to start - root means start from the top
  storage, // will use localStorage in the browser
  whitelist: ["cart"], // values we dont want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// the store only needs a rootReducer
// we add the extra params to visualise the store
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
