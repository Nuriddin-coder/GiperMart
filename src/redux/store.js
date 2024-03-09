import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import { saveState } from "../config/storage";
import { productReducer } from "./reducer/product-reducer";
import {
  addProduct,
  removeProduct,
  toggleAmount,
  totalPrice,
  setCount,
} from "./reducer/product-reducer";

const storageMiddleware = createListenerMiddleware();

storageMiddleware.startListening({
  matcher: isAnyOf(addProduct, removeProduct, toggleAmount),
  effect: (_, api) => {
    api.dispatch(totalPrice());
    api.dispatch(setCount());
  },
});

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleware.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().product);
});
