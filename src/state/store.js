import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { createRootReducer } from "./reducers";
import { rootSaga } from "./rootSaga";

let devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

let storeChoice;

if (window.__REDUX_DEVTOOLS_EXTENSION__ != null) {
    storeChoice = createStore(
        createRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            devtools
        )
    );
}
else {
    storeChoice = createStore(
        createRootReducer(),
        initialState,
        applyMiddleware(...middleware)
    );
}
const store = storeChoice;

sagaMiddleware.run(rootSaga);

export default store;

/*export const getState = () => {
    console.log(store.getState());
    return store.getState();
}*/