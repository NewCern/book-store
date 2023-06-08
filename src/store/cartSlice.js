import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

// this is a combination of actions and reducers
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, item) => {
            return {
                ...state,
                items: [
                    ...state.items,
                    item.payload, 
                ],
            }
        },
        removeFromCart: (state, item) => {
            const newList = state.items.filter(item => item.bookId !== item.payload.bookId);
            return {
                ...state,
                items: newList,
            }
        },
    },
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;