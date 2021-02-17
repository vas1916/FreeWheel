import { all } from "redux-saga/effects";

import servicesSagas from "./Services/sagas";
import searchSagas from "./Search/sagas";

function* rootSaga() {
  yield all([ ...servicesSagas, ...searchSagas]);
}

export default rootSaga;
