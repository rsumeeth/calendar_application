import { createSlice } from "@reduxjs/toolkit";
import { add, sub } from "date-fns";
import getUnixTime from "date-fns/getUnixTime";
import fromUnixTime from "date-fns/fromUnixTime";

const currentMonthRedux = getUnixTime(new Date());
const currentSelectedDateRedux = getUnixTime(new Date());

export const yearMonthDaySlice = createSlice({
  name: "yearMonthDay",
  initialState: {
    value: { currentMonthRedux, currentSelectedDateRedux },
  },
  reducers: {
    addOneMonthRedux(state, action) {
      state.value.currentMonthRedux = getUnixTime(
        add(fromUnixTime(action.payload), { months: 1 })
      );
    },

    subractOneMonthRedux(state, action) {
      state.value.currentMonthRedux = getUnixTime(
        sub(fromUnixTime(action.payload), { months: 1 })
      );
    },
    selectedDateRedux(state, action) {
      state.value.currentSelectedDateRedux = action.payload;
    },
  },
});

export const { addOneMonthRedux, subractOneMonthRedux, selectedDateRedux } =
  yearMonthDaySlice.actions;
export default yearMonthDaySlice.reducer;
