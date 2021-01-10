import { BreedActions } from "./breedTypes";

export const getBreeds = () => ({ type: BreedActions.FETCH_BREED_REQUEST });

export const getBreedsSuccess = () => ({
  type: BreedActions.FETCH_BREED_SUCCESS,
  payload: breeds,
});

export const getBreedsFail = () => ({
  type: BreedActions.FETCH_BREED_FAIL,
  payload: error,
});
