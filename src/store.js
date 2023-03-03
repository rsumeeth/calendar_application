import { configureStore } from "@reduxjs/toolkit";
import yearMonthDaySlice from "./redux/yearMonthDaySlice";
import itemsReducer from "./redux/itemsSlice";

export const store = configureStore({
  reducer: {
    yearMonthDay: yearMonthDaySlice,
    items: itemsReducer,
  },
});
