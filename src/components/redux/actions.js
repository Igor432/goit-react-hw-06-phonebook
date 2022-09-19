import { nanoid } from "nanoid";

export const addContact = (firstname, number) => {
    return {
        type: "contacts/addContact",
        payload: {
            id: nanoid(),
            firstname: firstname,
            number: number
        }
    }
}


export const deleteContact = id => {
    return {
        type: 'contacts/deleteContact',
        id
    }
}


export const setContactFilter = text => {
    return {
        type: "filters/setContactFilter",
        payload: text,
    }
}