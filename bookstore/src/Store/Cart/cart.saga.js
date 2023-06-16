import { put, takeLatest, all } from "redux-saga/effects";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart.action";

function* add_to_cart_saga({type,payload}){
   // console.log("add_to_cart_saga called")
   yield put({type:ADD_TO_CART, payload:payload})
}

function* remove_from_cart_saga({type, payload}){
    console.log("remove_from_cart_saga called",payload)
    yield put({type:REMOVE_FROM_CART, payload:payload})
}

export function* cartSaga(){
    yield takeLatest("ADD_TO_CART_SAGA", add_to_cart_saga);
    yield takeLatest("REMOVE_FROM_CART_SAGA", remove_from_cart_saga);
}