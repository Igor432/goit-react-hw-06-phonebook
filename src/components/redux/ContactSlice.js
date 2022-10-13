import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [],
    filter: ''
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
        setContactFilter(state, action) {
            state.filter = action.payload;
        }
    },
});







export const contactReducer = itemSlice.reducer;
export const { addContact, deleteContact, setContactFilter } = itemSlice.actions;