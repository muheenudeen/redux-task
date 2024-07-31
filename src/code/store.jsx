import { configureStore } from "@reduxjs/toolkit";
import ageReducer from "./ageSlice";

const store = configureStore({
    reducer: {
        age: ageReducer,
    }
});

export default store;
