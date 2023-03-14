import { combineReducers } from "redux";
import buildData from "./dataSlice";


const rootReducer = combineReducers({
  buildData: buildData.reducer,
});

export default rootReducer;