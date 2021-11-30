import { call, put, takeEvery } from "redux-saga/effects";
import { getUser } from "./userAPI";
import { GET_USER, setUser } from "./userActions";

function* handleGetUser(action) {
    try {
        const response = yield call(getUser)
        const { data } = response;
        yield put(setUser(data));
    } catch (error) {
        console.log(error);
    }
}

export const userSaga = [
    takeEvery(GET_USER, handleGetUser)
]