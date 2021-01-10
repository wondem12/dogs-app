import { takeEvery, put } from "redux-saga/effects";
import BreedActions from "../actions/breedTypes";
import * as actions from "../actions/breed";
import axios from "axios";

function* getBreeds(action) {
  try {
    const response = yield axios.get("https://dog.ceo/api/breeds/list/all");
    yield put(actions.getBreedsSuccess(response));
  } catch (e) {
    const error = e.response;
    yield put(actions.getBreedsFail(error));
  }
}

function* breedsSaga() {
  yield takeEvery(BreedActions.FETCH_BREED_REQUEST, getBreeds);
}

export default breedsSaga;
