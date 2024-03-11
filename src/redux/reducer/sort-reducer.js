import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    createSort: (state, action) => {
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload.keyName]: action.payload.value,
        },
      };
    },
    clearSort: (state) => {
      return { ...state, value: {} };
    },
  },
});

export const sortSliceReducer = sortSlice.reducer;

export const { createSort, clearSort } = sortSlice.actions;
