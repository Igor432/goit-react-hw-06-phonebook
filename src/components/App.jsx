import Filter from './phonebook/Filter';
import ContactList from './phonebook/ContactList';
import ContactForm from '../components/phonebook/ContactForm';
import style from './phonebook/phonebook.module.css';



function App() {


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 className={style.title_tag}>Phonebook</h1>
      <ContactForm  />

      <h2 className={style.title_tag}>Contacts</h2>

      <Filter />
      <ContactList/>
    </div>
  );
}


export default App;
