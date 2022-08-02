
import ContactElement from "./ContactElements";


const ContactList = ({Contacts, filterValue}) => {

    const filteredContact = Contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))

        
            return (

<ul class='contacts_list'>
    
    { filteredContact.map(filcontact => (
        <ContactElement contact={filcontact}/>
 
     ))}
 
     </ul>
             
                 )
            
        


        
}

export default ContactList;