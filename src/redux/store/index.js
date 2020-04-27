import { applyMiddleware, createStore, combineReducers } from "redux";
import CreateSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import WorkReducer from "../reducer/WorkReducer";
import rootSaga from "../middleware";

const sagaMiddleware = CreateSagaMiddleware();
const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(
  combineReducers({
    work: WorkReducer,
  }),
  middleware
);

sagaMiddleware.run(rootSaga);

export default store;
