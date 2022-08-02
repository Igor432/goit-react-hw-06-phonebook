import style from '../phonebook/phonebook.module.css'


const Filter = ({onFilter}) => {



        return (

            <div className={style.filter}>
            <input
              type="filter"
              name="filter"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Filter your contacts"
              required
              className={style.filter_input}
              onChange={onFilter}
            
            />


     
            </div>
            

        )
    }
        
    
        


    export default Filter