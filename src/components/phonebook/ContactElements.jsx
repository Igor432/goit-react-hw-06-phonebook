import style from '../phonebook/phonebook.module.css'


const ContactElement = ({contact}) =>  {
 
        return (
           
            <li key={contact.id} className={style.contact_item}>               
            <p class={style.item_name} >{contact.name} </p> <p class={style.item_number}>{contact.number}</p>
            <button class={style.delete_button} type="button" onClick>Delete</button>
            </li>)
    
       }


    export default ContactElement