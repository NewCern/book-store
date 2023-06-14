import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import loadingSlice from "./loadingSlice";
import searchSlice from "./searchSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const persistConfig = {
    key: 'root',
    storage,
    
  };

  const rootReducer = combineReducers({
    loading: loadingSlice,
    search: searchSlice,
    cart: cartSlice,
    product: productSlice,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
  });
  

// export const store = configureStore({
//     reducer: {
//         loading: loadingSlice,
//         search: searchSlice,
//         cart: cartSlice,
//         product: productSlice,
//     },
// })