// import { createStore, applyMiddleware } from "redux";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";

import rootReducer from "./root-reducer";

// const middlewares = [logger];

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
