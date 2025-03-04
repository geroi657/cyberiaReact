import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from './mobileSlice';

export const store = configureStore({
   reducer: {
       mobile: mobileReducer
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;