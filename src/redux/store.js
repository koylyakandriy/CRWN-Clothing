import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

// if need use logger
/* const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares)); */

// if need use devtools
const middlewares = [];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

export default { store, persistor };
