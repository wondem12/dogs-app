import { DogActions } from "../actions/dogTypes";

const initialState = {
  breeds: [],
  loading: false,
  error: false,
};

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case DogActions.FETCH_BREED_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case DogActions.FETCH_BREED_SUCCESS:
      return {
        loading: false,
        breeds: action.payload,
      };
    case DogActions.FETCH_BREED_FAIL:
      return {
        error: true,
        loading: false,
        ...state,
      };
    default:
      return state;
  }
};
export default dogReducer;
