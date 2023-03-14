import { combineReducers } from "redux";
import buildData from "./dataSlice";


const reducer = combineReducers({
  users: buildData.reducer,
});

export default reducer;