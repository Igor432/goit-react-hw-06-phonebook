import { Component } from "react";
import Filter from "./phonebook/Filter";
import ContactList from "./phonebook/ContactList";
import ContactForm from "../components/phonebook/ContactForm";
import { nanoid } from "nanoid";

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
   this.setState({contacts: [...contacts, {id: nanoid(), name: value, number: numberVal}]}, console.log(this.state.contacts)) 
   e.target.reset();    
}





onFilter = (e) => {
    
  const filterValue = e.target.value
  
  this.setState({filter: filterValue})
  console.log(this.state.filter)
}


titleTag = {
  fontSize: '45px',
margin: '0px',
display: 'block',

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
<h1 style={{...this.titleTag}}>Phonebook</h1>
  <ContactForm onSubmit={this.onSubmit}/>

  <h2 style={{...this.titleTag}}>Contacts</h2>
  
  <Filter onFilter={this.onFilter} contacts={this.state.contacts} />
  <ContactList Contacts={this.state.contacts} filterValue={this.state.filter}/>

    </div>
  );

}
};

export default App