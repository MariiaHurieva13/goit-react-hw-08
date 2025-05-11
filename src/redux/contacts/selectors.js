import { selectNameFilter } from "../filters/selectors"
import {createSelector } from "@reduxjs/toolkit"


export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;


export const SelectFilterContactsMemo = createSelector([selectContacts, selectNameFilter], (contacts, filterName)=>{

    console.log(filterName)
 
    if (!contacts) {return []}
    if (!filterName) {return contacts}
   
    const filterContacts = contacts.filter(ar=>ar.name.toLowerCase().includes(filterName.toLowerCase()));
    return filterContacts;
})
