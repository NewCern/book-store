import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
}

// this is a combination of actions and reducers
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, item) => {
            const cartTotal = state.items.reduce((acc, cartItem) => {
                const price = parseFloat(cartItem.price);
                const total = acc + price;
                return total;
            }, 0);
            return {
                total: (cartTotal + parseFloat(item.payload.price)).toFixed(2),
                items: [
                    ...state.items,
                    {
                    ...item.payload, 
                    price: item.payload.quantity * item.payload.price,
                    }
                ],
            }
        },
        removeFromCart: (state, deleteMe) => {
            const newList = state.items.filter( keepMe => keepMe.bookId !== deleteMe.payload.bookId);
            const newTotal = newList.reduce((acc, item) => {
                const price = parseFloat(item.price);
                const total = acc + price;
                return total;
            }, 0);
            return {
                ...state,
                items: newList,
                total: newTotal.toFixed(2),
            }
        },
        updateTotal: (state, total) => {
            return {
                ...state,
                total: total.payload,
            }
        },
    },
})

export const { addToCart, removeFromCart, updateTotal } = cartSlice.actions;
export default cartSlice.reducer;