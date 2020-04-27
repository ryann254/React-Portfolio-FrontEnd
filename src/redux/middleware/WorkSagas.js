import { takeLatest, put } from "redux-saga/effects";
import { ADD_WORK_EDUCATION, EVENT_OR_WORK_ADDED } from "../action-types";

function* addWorkSaga(action) {
  //Checking whethe the data is there
  const data = action.payload;
  if (data !== "") {
    yield put({ type: EVENT_OR_WORK_ADDED });
  }
  // this will be used to make an api call to the backend
}

export function* watchAddWorkSaga() {
  // this is to watch for the specific action to make an api call
  yield takeLatest(ADD_WORK_EDUCATION, addWorkSaga);
}
