import { Component } from "react";
import Filter from "./phonebook/Filter";
import ContactList from "./phonebook/ContactList";
import ContactForm from "../components/phonebook/ContactForm";
import { nanoid } from "nanoid";
import style from './phonebook/phonebook.module.css'


class App extends Component {



  state = {
    contacts: [],
    filter: '',
  }


  onSubmit = (e) => {
    e.preventDefault();
    const target = e.target
    const name = target.name
    const value = name.value
    const numberVal = e.target.number.value
    const { contacts } = this.state       

    if (name === contacts.name) {
      console.log("The name already exists!") 
    } else {
   this.setState({contacts: [...contacts, {id: nanoid(), name: value, number: numberVal}]}, console.log(this.state.contacts)) 
    }
   e.target.reset();    
}





onFilter = (e) => {
    
  const filterValue = e.target.value
  
  this.setState({filter: filterValue})
  console.log(this.state.filter)
}



render(){
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
  <ContactForm onSubmit={this.onSubmit}/>

  <h2 className={style.title_tag}>Contacts</h2>
  
  <Filter onFilter={this.onFilter} contacts={this.state.contacts} />
  <ContactList Contacts={this.state.contacts} filterValue={this.state.filter}/>

    </div>
  );

}
};

export default App