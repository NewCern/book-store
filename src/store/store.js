import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import searchSlice from "./searchSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        loading: loadingSlice,
        search: searchSlice,
        cart: cartSlice,
    },
})