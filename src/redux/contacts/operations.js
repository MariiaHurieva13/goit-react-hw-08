import axios from "axios";
//import { dataFullfilledOperation, setError, setLoading } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global/'


export const fetchDataThunk = createAsyncThunk("fetchContacts", async (_, thunkAPI) => {
    try {
        const response = await axios.get('/Contacts')
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${id}`)
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
} )

export const addContactThunk = createAsyncThunk('addContact', async (body, thunkAPI) => {
      try {
        const response = await axios.post('/Contacts', body)
        console.log (response.data)
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  );
