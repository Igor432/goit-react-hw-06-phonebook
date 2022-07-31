import { Component } from "react";
import { nanoid } from 'nanoid'
import '../phonebook/phonebook.css'

class Phonebook extends Component {

    state = {
        contacts: [],
        name: '',
        number: ''
      }

    onSubmit = (e) => {
        e.preventDefault();
       const form = e.currentTarget
       const nameValue = form.elements.name.value
       const numberValue = form.elements.number.value
       this.setState({name: nameValue, contacts: [...this.state.contacts, nameValue]})

console.log(this.state.number)
    }

    
   
    makeList = (key) =>  {
        return (
            <ul class='contacts_list'>
    
       { key.map(contact => (
            <li key={contact} class='contact_item'>{contact}</li>
    
        ))}
    
        </ul>
        )
    }
    





render () {
  
const {contacts} = this.state
    

    return (

<form onSubmit={this.onSubmit} class='forma'>
    <input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  />
  <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>

  <button type="submit" class='submit_button'>Add Contact</button>
  <div class='contacts_list'>{this.makeList(contacts)}</div>
</form>
    )
}







}



export default Phonebook