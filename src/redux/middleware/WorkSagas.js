import { takeLatest, put } from "redux-saga/effects";
import {
  ADD_DATA,
  ADD_WORK_EDUCATION,
  EVENT_OR_WORK_ADDED,
  ADD_EVENT_ACHIEVEMENTS,
} from "../action-types";

function* addWorkSaga(action) {
  //Checking whethe the data is there
  const data = action.payload;
  if (data !== "") {
    yield put({ type: EVENT_OR_WORK_ADDED });
    if (data.radio === "work") {
      yield put({ type: ADD_WORK_EDUCATION, payload: data });
    } else {
      yield put({ type: ADD_EVENT_ACHIEVEMENTS, payload: data });
    }
  }
  // this will be used to make an api call to the backend
}

export function* watchAddWorkSaga() {
  // this is to watch for the specific action to make an api call
  yield takeLatest(ADD_DATA, addWorkSaga);
}
