import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/'

const setAuthHeader = (token) => {
     axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const removeAuthHeader = () => {
     axios.defaults.headers.common.Authorization = ``
}

export const registerThunk = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', body)
        setAuthHeader(response.data.token)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logInThunk = createAsyncThunk('auth/logIn', async (body, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', body)
        setAuthHeader(response.data.token)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logOutThunk = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
    try {
        const response = await axios.post('/users/logout')
        removeAuthHeader()
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const savedToken = thunkAPI.getState().auth.token
        if (!savedToken) {
            return thunkAPI.rejectWithValue("there is not a token")
        }

        setAuthHeader(savedToken)
        const response = await axios.get('/users/current')
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
