import { userSaga } from "./User/userSaga"
import { productSaga } from "./Product/productSaga"
import { all } from 'redux-saga/effects'

export function* rootSaga() {
    yield all([
        ...userSaga,
        ...productSaga
    ])
}