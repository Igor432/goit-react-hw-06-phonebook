const initialState = {
    contacts: {
        items: [],
        filter: ''
    }
}


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "contacts/addContact":

            return {
                ...state.contacts,
                items: [state.contacts, action.payload]
            }

        case "contacts/deleteContact":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case "filters/setContactFilter":
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state;
    }
    // В зависимости от типа экшена будет выполняться разная логика

}