import axios from '../instance/axiosConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getOrder = createAsyncThunk('order/getOrder', async (userId) => {
    try {
        const response = await axios.get(`/order/${userId}`);
        return response.data;
    } catch (err) {
        return err;
    }
});

export const checkout = createAsyncThunk('order/checkout', async ({ userId, items, bill }) => {
    try {
        const response = await axios.post(`/order/${userId}`, { items, bill });
        return response.data;
    } catch (err) {
        return err;
    }
});
