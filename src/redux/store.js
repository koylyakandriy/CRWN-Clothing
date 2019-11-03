import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

// if need use logger
/* const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares)); */

// if need use devtools
const middlewares = [logger];
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
