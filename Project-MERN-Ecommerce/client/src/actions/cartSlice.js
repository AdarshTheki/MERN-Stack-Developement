import axios from '../instance/axiosConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCart = createAsyncThunk('cart/getCart', async (userId) => {
    try {
        const response = await axios.get(`/cart/${userId}`);
        return response.data.items;
    } catch (err) {
        return err;
    }
});

export const postCart = createAsyncThunk('cart/postCart', async (userId) => {
    try {
        const response = await axios.post(`/cart/${userId}`);
        return response.data;
    } catch (err) {
        return err?.message;
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isLoading: false,
        cart: [],
        isError: null,
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const { _id } = payload;
            const existingItem = state.cart.find((i) => i._id === _id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ productId: payload, quantity: 1, _id });
            }
        },
        removeCart: (state, { payload }) => {
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== payload.id),
            };
        },
        increaseQty: (state, { payload }) => {
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item._id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        },
        decreaseQty: (state, { payload }) => {
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item._id === payload.id ? { ...item, quantity: item.quantity - 1 } : item
                ),
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCart.pending, (state, action) => {
                state.cart = [];
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.cart = action.payload;
                state.isLoading = false;
                state.isError = null;
            })
            .addCase(getCart.rejected, (state, action) => {
                state.cart = [];
                state.isLoading = false;
                state.isError = action.error;
            });
    },
});

export const { removeCart, increaseQty, decreaseQty, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
