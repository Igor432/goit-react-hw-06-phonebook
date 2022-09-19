import ContactElement from './ContactElements';
import style from '../phonebook/phonebook.module.css';
import { useSelector } from 'react-redux';


const ContactList = () => {

const contacts = useSelector(state => state.contacts)
const filter = useSelector(state => state.filter)

const filteredContact = () => {
  return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };


  if (filter) {

  return (
    <div className={style.contacts}>
      <ul className={style.contacts_list}>
        {filteredContact().map(filcontact => (
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
}

/*
ContactList.propTypes = {
  Contacts: PropTypes.array,
  filterValue: PropTypes.string,
  onDelete: PropTypes.func,
};
*/

export default ContactList;
