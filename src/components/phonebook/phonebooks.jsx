import { Component } from "react";
import { nanoid } from 'nanoid'
import '../phonebook/phonebook.css'


class Phonebook extends Component {


    state = {
        contacts: [],
        name: '',
        number: '',
        filter: '',
      }


handleChange = (e) => {
const target = e.target
const name = target.name
const value = target.value

this.setState({[name]: value})


}


    onSubmit = (e) => {
        e.preventDefault();
        const {name, number} = this.state
        const {contacts} = this.state       
       this.setState({contacts: [...contacts, {id: nanoid(), name: name, number: number}] }, console.log(this.state.contacts))     
    }


    onFilter = (e) => {
        const {contacts} = this.state
        const filterValue = e.target.value
        console.log(filterValue)
        this.setState({filter: filterValue})
      

        const item_name = (document.querySelector('.item_name'))
        console.log(item_name)

}


    makeList = (key) =>  {


    return (
        <ul class='contacts_list'>

   { key.map(contact => (
        <li key={contact.id} class='contact_item'>
            
         <p class='item_name'>{contact.name} </p>   <p clas='item_number'>{contact.number}</p></li>

    ))}

    </ul>
    )
}


    
render () {

    
  
const {contacts} = this.state
    

    return (
<div class="main_div">
<form onSubmit={this.onSubmit} class='forma'>
    <p>Name</p>
    <input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  onChange={this.handleChange}
  />
  <p>Number</p>
  <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={this.handleChange}
/>

  <button type="submit" class='submit_button'>Add Contact</button>
</form>
<div class='contacts'>

<input
  type="filter"
  name="filter"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Filter your contacts"
  required
  onChange={this.onFilter}
/>
   {this.makeList(contacts)}
</div>

</div>
    )
}

}





export default Phonebook