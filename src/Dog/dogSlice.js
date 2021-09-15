import { createSlice } from "@reduxjs/toolkit";

export const DOG_API_URL = "https://random.dog/woof.json";

export const dogSlice = createSlice({
    name: "dog",
    initialState: {
        loading: false,
        error: false,
        data: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setLoading, setError, setData } = dogSlice.actions;

export default dogSlice.reducer;