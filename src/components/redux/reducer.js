const initialState = {
    contacts: {
        items: [],
        filter: ''
    }
}


export const rootReducer = (state = initialState.contacts, action) => {
    switch (action.type) {
        case "contacts/addContact":

            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
            /*
                  case "contacts/deleteContact":
                      return {
                          ...state,
                          items: [state.items.filter(contact => contact.id !== action.payload)]
                      }
                    
                           case "filters/setContactFilter":
                               return {
                                   ...state,
                                   filter: action.payload
                               }
                               */
        default:
            return state;
    }
    // В зависимости от типа экшена будет выполняться разная логика

}