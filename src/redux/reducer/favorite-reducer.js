import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState("favorites") || {
  favorites: [],
};

const favoriteProduct = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    saveProduct: (state, action) => {
      console.log(action.payload);

      const saveIdf = state.favorites.find(
        (item) => item.id === action.payload.id
      );

      if (!saveIdf) {
        return {
          ...state,
          favorites: [...state.favorites, { ...action.payload }],
        };
      }
      return state;
    },
    deleteFavorite: (state, action) => {
      const item = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, favorites: item };
    },
  },
});

export const favoriteProductReducer = favoriteProduct.reducer;

export const { saveProduct, deleteFavorite } = favoriteProduct.actions;
