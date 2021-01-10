import { BreedActions } from "../actions/breedTypes";
const initialState = {
  breeds: [],
  loading: false,
  error: false,
};

const breedReducer = (state = initialState, action) => {
  switch (action.type) {
    case BreedActions.FETCH_BREED_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case BreedActions.FETCH_BREED_SUCCESS:
      return {
        loading: false,
        breeds: action.payload,
      };
    case BreedActions.FETCH_BREED_FAIL:
      return {
        error: true,
        loading: false,
        ...state,
      };
    default:
      return state;
  }
};
export default breedReducer;
