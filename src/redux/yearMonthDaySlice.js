import { createSlice } from "@reduxjs/toolkit";
import { add, sub } from "date-fns";
import getUnixTime from "date-fns/getUnixTime";
import fromUnixTime from "date-fns/fromUnixTime";

const currentMonthRedux = getUnixTime(new Date());

export const yearMonthDaySlice = createSlice({
  name: "yearMonthDay",
  initialState: {
    value: { currentMonthRedux },
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
  },
});

export const { addOneMonthRedux, subractOneMonthRedux } =
  yearMonthDaySlice.actions;
export default yearMonthDaySlice.reducer;
