import { call, put, takeLatest } from "redux-saga/effects";
import { getUser } from "../User/userAPI";
import { GET_USER, setUser } from "../User/userActions";

function * handleGetProduct(action) {
    try {
        const response = yield call(getUser)
        const { data } = response;
        yield put(setUser(data));
    } catch (error) {
        console.log(error);
    }
}

export const productSaga = [
    takeLatest(GET_USER, handleGetProduct)
]