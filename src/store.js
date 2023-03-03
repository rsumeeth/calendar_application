import { configureStore } from "@reduxjs/toolkit";
import yearMonthDaySlice from "./redux/yearMonthDaySlice";

export const store = configureStore({
  reducer: {
    yearMonthDay: yearMonthDaySlice,
  },
});
