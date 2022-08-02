import ContactElement from "./ContactElements"


const Filter = ({onFilter, contacts, filter}) => {


    const filteredContact = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    console.log(filteredContact)


        return (

            <div class='contacts'>
            <p >Search</p>
            <input
              type="filter"
              name="filter"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Filter your contacts"
              required
              class='filter_input'
              onChange={onFilter}
            
            />


<ul class='contacts_list'>
    
    { filteredContact.map(contact => (
        <ContactElement contact={contact}/>
 
     ))}
 
     </ul>



             
            </div>
            

        )
    }
        
    
        

    export default Filter