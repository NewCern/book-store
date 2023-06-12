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
                const total = (acc + price);
                return total;
            }, 0);
            return {
                total: (cartTotal + parseFloat(item.payload.price)).toFixed(2),
                items: [
                    ...state.items,
                    {
                    ...item.payload, 
                    }
                ].sort((a, b) => a.title.localeCompare(b.title)),
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
                items: newList.sort((a, b) => a.title.localeCompare(b.title)),
                total: newTotal.toFixed(2),
            }
        },
        updateTotal: (state, updatedCarttotal) => {
            return {
                ...state,
                total: (parseFloat(updatedCarttotal.payload).toFixed(2)),
            }
        },
        updateQuantity: (state, book) => {
            const newList = state.items.filter(item => item.bookId !== book.payload.bookId);
            return {
                ...state,
                items: [
                    ...newList,
                    {
                        ...book.payload,
                    }
                ].sort((a, b) => a.title.localeCompare(b.title))
            };
        },
    },
})

export const { addToCart, removeFromCart, updateTotal, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;