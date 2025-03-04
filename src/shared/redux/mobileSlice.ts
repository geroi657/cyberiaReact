import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const mobileSlice = createSlice({
    name: "mobile",
    initialState: {
        mobile: false
    },
    reducers: {
        switchMobile: (state, action : PayloadAction<boolean>) => {
            state.mobile = action.payload;
        }
    }
});

export const { switchMobile } = mobileSlice.actions;

export default mobileSlice.reducer;