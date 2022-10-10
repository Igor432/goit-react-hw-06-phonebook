import Filter from './phonebook/Filter';
import ContactList from './phonebook/ContactList';
import ContactForm from '../components/phonebook/ContactForm';
import style from './phonebook/phonebook.module.css';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './redux/store';

export function App() {
  return (
    <div className={style.main}>
      <PersistGate loading={null} persistor={persistor}>
        <h1 className={style.title_tag}>Phonebook</h1>
        <ContactForm />

        <h2 className={style.title_tag}>Contacts</h2>

        <Filter />
        <ContactList />
      </PersistGate>
    </div>
  );
}

export default App;
