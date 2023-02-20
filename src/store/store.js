import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// middlewares are small libraries/logic
// applied before actions hit the reducers
const middleware = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const persistConfig = {
  key: "root", // where to start - root means start from the top
  storage, // will use localStorage in the browser
  blacklist: ["user"], // values we dont want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
  });

export const persistor = persistStore(store);
