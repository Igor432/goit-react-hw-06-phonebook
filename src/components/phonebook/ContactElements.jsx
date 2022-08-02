
const ContactElement = ({contact}) =>  {
 

        return (
           
            <li key={contact.id} class='contact_item'>               
            <p class='item_name'>{contact.name} </p> <p clas='item_number'>{contact.number}</p>
            <button class='delete_button' type="button" onClick>Delete</button>
            </li>)
    
       }
    
    

    export default ContactElement