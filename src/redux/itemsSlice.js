import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    value: [],
  },
  reducers: {
    addItem(state, action) {
      state.value.push(action.payload);
    },
    editItem(state, action) {
      state.value.forEach((element, index) => {
        if (index === action.payload) {
          element.editedStatus = true;
          element.indexEditValue = action.payload;
          element.isOpen = true;
        }
      });
    },
    saveItem(state, action) {
      state.value.forEach((element, index) => {
        if (index === action.payload.index) {
          element.value = action.payload.search;
          element.time = action.payload.time;
          // console.log(element.time);
          element.editedStatus = false;
        }
      });
    },
    cancelItem(state, action) {
      state.value.forEach((element, index) => {
        if (index === action.payload.index) {
          element.editedStatus = false;
        }
      });
    },
    deleteItem(state, action) {
      delete state.value[action.payload];
    },
  },
});

export const { addItem, editItem, saveItem, cancelItem, deleteItem } =
  itemsSlice.actions;
export default itemsSlice.reducer;
