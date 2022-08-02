import ContactElement from "./ContactElements"


const Filter = ({onFilter}) => {

    

        return (

            <div class='contacts'>
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
    
   
 
     </ul>
     
            </div>
            

        )
    }
        
    
        


    export default Filter