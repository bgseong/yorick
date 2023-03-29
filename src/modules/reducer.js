import { combineReducers } from "redux";
import buildData from "./dataSlice";
import runeData from "./runeSlice";

const rootReducer = combineReducers({
  buildData: buildData.reducer,
  runeData: runeData.reducer,
});

export default rootReducer;