import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState("product") || {
  products: [],
  count: 0,
  totalPrice: 0,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const idf = state.products.find((item) => item.id === action.payload.id);

      if (!idf) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: action.payload.price,
            },
          ],
        };
      }
      return state;
    },
    removeProduct: (state, action) => {
      const result = state.products.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, products: result };
    },
    toggleAmount: (state, action) => {
      if (action.payload.type === "plus") {
        const newProduct = state.products.map((item) => {
          const price = Number(item.price.replace(/\s+/g, ""));

          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * price,
            };
          }
          return item;
        });
        return { ...state, products: newProduct };
      }
      if (action.payload.type === "minus") {
        const newProduct = state.products.map((item) => {
          const price = Number(item.price.replace(/\s+/g, ""));

          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * price,
            };
          }
          return item;
        });
        return { ...state, products: newProduct };
      }
    },
    totalPrice: (state) => {
      return {
        ...state,
        totalPrice: state.products.reduce((a, b) => a + b.userPrice, 0),
      };
    },
    setCount: (state) => {
      return { ...state, count: state.products.length };
    },
  },
});

export const productReducer = product.reducer;

export const { addProduct, removeProduct, toggleAmount, totalPrice, setCount } =
  product.actions;
