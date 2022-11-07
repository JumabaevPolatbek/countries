import { legacy_createStore as createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {rootReducer} from '../redux/reducers/rootReducer'
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)))
sagaMiddleWare.run(rootSaga);