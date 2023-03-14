
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/reducer";

const store = configureStore({ 
    reducer:rootReducer 
});

export default store;