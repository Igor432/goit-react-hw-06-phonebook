import ContactElement from './ContactElements';
import style from '../phonebook/phonebook.module.css';
import { useSelector } from 'react-redux';



const ContactList = () => {


  const contacts = useSelector(contacts => contacts.items)
console.log(contacts)
/*
if (filter) {
const filteredContact = () => {
  return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
*/
  return (
    <div className={style.contacts}>
      <ul className={style.contacts_list}>
        {contacts.map(filcontact => (
          <ContactElement
            key={filcontact.id}
            contact={filcontact}
            onDelete=''
          />
        ))}
      </ul>
    </div>
  )

}

 





/*
ContactList.propTypes = {
  Contacts: PropTypes.array,
  filterValue: PropTypes.string,
  onDelete: PropTypes.func,
};
*/

export default ContactList;
