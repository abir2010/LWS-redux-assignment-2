/* eslint-disable no-unused-vars */
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import bookingReducer from "./booking/bookingReducer";

const myLogger = (store) => (next) => (action) => {
    console.log(store.getState());
    const nextState = [action].reduce(bookingReducer, store.getState());
    console.log(nextState);

    return next(action);
};

const bookingChecker = (store) => (next) => (action) => {
    const nextState = [action].reduce(bookingReducer, store.getState());
    if (nextState.length > 3) {
        window.alert("Sorry, You can't book more than 3 flights at a time!");
    } else {
        return next(action);
    }
};

const store = createStore(bookingReducer, applyMiddleware(bookingChecker));

export default store;
