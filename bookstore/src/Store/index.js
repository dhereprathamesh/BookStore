import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects";

import CartReducer from "../Store/Cart/cart.reducer"

import { cartSaga } from "./Cart/cart.saga";

const rootReducer = combineReducers({ cartReducer: CartReducer });
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

function* rootSaga() {
    yield all([cartSaga()]);

}
sagaMiddleware.run(rootSaga)

export default store;