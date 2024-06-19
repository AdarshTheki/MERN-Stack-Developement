import axios from '../instance/axiosConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/register', async ({ name, email, password }) => {
    try {
        const response = await axios.post('/register', { name, email, password });
        return response.data;
    } catch (err) {
        return err;
    }
});

export const getMe = createAsyncThunk('auth/getMe', async () => {
    try {
        const response = await axios.post('/user');
        return response.data;
    } catch (err) {
        return err?.message;
    }
});

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
    try {
        const response = await axios.post('/login', { email, password });
        return response.data;
    } catch (err) {
        return err;
    }
});

const getToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return JSON.stringify(token);
    } else return '';
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: getToken(),
        isAuthenticated: null,
        isLoading: false,
        user: null,
        isError: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token');
            state.token = null;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.user = null;
            state.isError = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.isError = null;
                state.user = null;
                state.isLoading = true;
                state.isAuthenticated = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem('token', JSON.stringify(action.payload.accessToken));
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.isLoading = false;
                state.isError = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.user = null;
                state.isError = action.error;
                state.isLoading = false;
                state.isAuthenticated = false;
            })
            .addCase(getMe.pending, (state, action) => {
                state.isError = null;
                state.isLoading = true;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.isLoading = false;
                state.isError = null;
            })
            .addCase(getMe.rejected, (state, action) => {
                state.user = null;
                state.isError = action.error;
                state.isLoading = false;
                state.isAuthenticated = false;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
