import style from '../phonebook/phonebook.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contacts => contacts.items)

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const numberVal = e.target.number.value;
   

const result = contacts.find(contact => contact.firstname === name)
if (result) {
  return  Notiflix.Notify.failure('The name already exists!');
}
dispatch(addContact(name, numberVal));
  };

  return (
    <div class="main_div">
      <form onSubmit={onSubmit} className={style.forma}>
        <p class="input_tag">Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={style.name_input}
        />
        <p class="input_tag">Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={style.number_input}
        />

        <button type="submit" className={style.submit_button}>
          Add Contact
        </button>
      </form>
    </div>
  );
};
/*
ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
*/

export default ContactForm;
