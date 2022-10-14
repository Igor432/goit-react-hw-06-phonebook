import ContactElement from './ContactElements';
import style from '../phonebook/phonebook.module.css';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../redux/selectors';

const ContactList = () => {
  const contactsState = useSelector(getContacts);
  const contactList = contactsState.contacts;
  const filter = useSelector(getFilter);

  console.log(filter);

  const filtered = () => {
    const filterValue = filter.filter;

    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

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

export default ContactList;
