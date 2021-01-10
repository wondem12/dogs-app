import { takeEvery, put } from "redux-saga/effects";
import * as actions from "../actions/dog";
import DogActions from "../actions/dogTypes";
import axios from "axios";

function* getDog(action) {
  try {
    const response = yield axios.get("https://dog.ceo/api/breeds/list/all");
    yield put(actions.getDogImageSuccess(response));
  } catch (e) {
    const error = e.response;
    yield put(actions.getDogImageFail(error));
  }
}

function* dogSaga() {
  yield takeEvery(DogActions.FETCH_DOG_REQUEST, getDog);
}

export default dogSaga;
