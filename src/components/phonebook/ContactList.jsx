
import ContactElement from "./ContactElements";


const ContactList = ({Contacts}) => {

        
            return (
                <ul class='contacts_list'>
        
           { Contacts.map(Contact => (
                <ContactElement contact={Contact}/>     
            ))}
        
            </ul>
            )
        
    
        
    

        
}

export default ContactList;