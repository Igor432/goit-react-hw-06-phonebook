import { deleteContact } from 'components/redux/actions';
import { useDispatch } from 'react-redux';
import style from '../phonebook/phonebook.module.css';


const ContactElement = ({ contact }) => {

  const dispatch = useDispatch();

  const onDelete = dispatch(deleteContact(contact.id))



  return (
    <li key={contact.id} className={style.contact_item}>
      <p class={style.item_name}>{contact.firstname} </p>{' '}
      <p class={style.item_number}>{contact.number}</p>
      <button
        id={contact.id}
        class={style.delete_button}
        type="button"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
};


/*
ContactElement.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
};
*/

export default ContactElement;
