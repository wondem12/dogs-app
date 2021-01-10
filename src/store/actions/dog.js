import { DogActions } from "./DogActions";

export const getDogImage = () => ({ type: DogActions.FETCH_DOG_REQUEST });

export const getDogImageSuccess = () => ({
  type: DogActions.FETCH_DOG_SUCCESS,
  payload: breeds,
});

export const getDogImageFail = () => ({
  type: DogActions.FETCH_DOG_FAIL,
  payload: error,
});
