import axios from '../instance/axiosConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getItems = createAsyncThunk('item/getItems', async () => {
    try {
        const response = await axios.get('/items');
        console.log(response.data);
        return response.data;
    } catch (err) {
        return err;
    }
});

export const createItem = createAsyncThunk(
    'item/createItem',
    async ({ title, description, price, category }) => {
        try {
            const response = await axios.post('/items', {
                title,
                description,
                price,
                category,
            });
            return response.data;
        } catch (err) {
            return err;
        }
    }
);

export const updateItem = createAsyncThunk(
    'item/updateItem',
    async ({ title, description, price, category, id }) => {
        try {
            const response = await axios.post(`/items/${id}`, {
                title,
                description,
                price,
                category,
            });
            return response.data;
        } catch (err) {
            return err;
        }
    }
);

export const deleteItem = createAsyncThunk('item/updateItem', async (id) => {
    try {
        const response = await axios.delete(`/items/${id}`);
        return response.data;
    } catch (err) {
        return err;
    }
});

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        isLoading: false,
        items: [],
        isError: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getItems.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
                state.isError = null;
            })
            .addCase(getItems.rejected, (state, action) => {
                state.items = [];
                state.isLoading = false;
                state.isError = action.error;
            });
    },
});

export default itemSlice.reducer;
