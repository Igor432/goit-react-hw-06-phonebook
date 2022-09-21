import ContactElement from './ContactElements';
import style from '../phonebook/phonebook.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(contacts => contacts.items);
  const filter = useSelector(contacts => contacts.filter)
  console.log(contacts);
  



 const filtered = () => {
  return contacts.filter(contact =>
      contact.firstname.toLowerCase().includes(filter.toLowerCase())
      
  )
  }



  return (
    <div className={style.contacts}>
      <ul className={style.contacts_list}>
        {filtered().map(contact => (
          <ContactElement contact={contact} key={contact.id} id={contact.id} />
        ))}
      </ul>
    </div>
  );
};

/*
ContactList.propTypes = {
  Contacts: PropTypes.array,
  filterValue: PropTypes.string,
  onDelete: PropTypes.func,
};
*/

export default ContactList;
