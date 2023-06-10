import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import searchSlice from "./searchSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

export const store = configureStore({
    reducer: {
        loading: loadingSlice,
        search: searchSlice,
        cart: cartSlice,
        product: productSlice,
    },
})