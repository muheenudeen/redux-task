import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    age: '1'
};

const ageSlice = createSlice({
    name: "age",
    initialState,
    reducers: {
        submit: (state, action) => {
            state.age = action.payload.age;
        }
    }
});

export default ageSlice.reducer;
export const { submit } = ageSlice.actions;
