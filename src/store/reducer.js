import { combineReducers } from "redux";
import breedReducer from "./reducers/breed";
import dogReducer from "./reducers/dog";

const reducers = combineReducers({ breedReducer, dogReducer });

export default reducers;
