
import ContactElement from "./ContactElements";
import style from '../phonebook/phonebook.module.css'


const ContactList = ({Contacts, filterValue}) => {



    const filteredContact = Contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
        
            return (
                <div className={style.contacts}>

<ul className={style.contacts_list} >
    
    { filteredContact.map(filcontact => (
        <ContactElement contact={filcontact}/>
 
     ))}
 
     </ul>
     </div> 
                 )
            
        


        
}

export default ContactList;