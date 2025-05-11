import { fetchDataThunk, deleteContactThunk, addContactThunk  } from "./operations"
import { logOutThunk } from '../auth/operations'
import { createSlice, isAnyOf} from "@reduxjs/toolkit"


const slice = createSlice({
    name : "contacts",
    initialState: {
          items: [],
          loading: false,
          error: null
        },

    extraReducers: builder => {
        builder
        .addCase(fetchDataThunk.fulfilled, (state, action) => {
             state.loading = false;
              state.error = null;
            state.items = action.payload;
        })
        .addCase(deleteContactThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter((item) => item.id !== action.payload);
        })
        .addCase(addContactThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload);
        })
         builder.addCase(logOutThunk.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loadingoading = false;
      }
        )
        .addMatcher(isAnyOf(addContactThunk.rejected, deleteContactThunk.rejected, fetchDataThunk.rejected ),
         (state, action) => {
            state.loading = false;
            state.error = action.payload;
       })
        .addMatcher(isAnyOf(addContactThunk.pending, deleteContactThunk.pending, fetchDataThunk.pending ),
         (state) => {
            state.loading = true;
            state.error = null;
       })
       
    }
})




export const { addContact, deleteContact,dataFullfilledOperation, setError, setLoading } = slice.actions;
export default slice.reducer;


/*export const SelectFilterContacts = (state) => {
    const contacts = selectContacts(state);
    const filterName = selectFilter(state);

    console.log(filterName)
 
        if (!contacts) {return []}
        if (!filterName) {return contacts}
       
        const filterContacts = contacts.filter(ar=>ar.name.toLowerCase().includes(filterName.toLowerCase()));
        return filterContacts;
      
}*/
