import Filter from "./phonebook/Filter";
import ContactList from "./phonebook/ContactList";
import ContactForm from "../components/phonebook/ContactForm";
import { nanoid } from "nanoid";
import style from './phonebook/phonebook.module.css'
import Notiflix from "notiflix";
import { useEffect, useState } from "react";


function App () {


const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')))
const [filter, setFilter] = useState('')



  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const numberVal = e.target.number.value
    const allName = [];

contacts.forEach(contact => {
allName.push(contact.name)
})


if (allName.includes(name)) {
  Notiflix.Notify.failure('The name already exists!')
} else { 
setContacts(state => [...state, {id: nanoid(), name: name, number: numberVal}])
e.target.reset()
}
    

  }

       
    
const onFilter = (e) => {
    
  const filterValue = e.target.value
  
  setFilter(filterValue)
}


const onDelete = (e) => {

const target = e.target
const newContacts = contacts.filter(contact => contact.id !== target.id)
  setContacts(newContacts)

}



useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
  console.log(JSON.parse(localStorage.getItem('contacts')))

  }, [contacts])






/*
const componentDidMount = () => {

if (localStorage.getItem('contacts') === null) {
  this.setState({contacts: []})

}
}
*/






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
  <ContactForm onSubmit={onSubmit}/>

  <h2 className={style.title_tag}>Contacts</h2>
  
  <Filter onFilter={onFilter} contacts={contacts} />
  <ContactList Contacts={contacts} filterValue={filter} onDelete={onDelete}/>

    </div>
  );

}


export default App