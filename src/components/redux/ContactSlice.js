import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [],
};

export const itemSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
        },
        deleteContact(state, action) {
            const index = state.contacts.findIndex(
                contact => contact.id === action.payload
            );
            state.contacts.splice(index, 1);
        },
    },
});



export const contactReducer = itemSlice.reducer;;
export const { addContact, deleteContact } = itemSlice.actions;