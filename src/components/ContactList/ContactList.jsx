import { SelectFilterContactsMemo, selectLoading, selectError  } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useSelector } from 'react-redux';



 function ContactList () {

  const filterContacts = useSelector(SelectFilterContactsMemo)
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);


    return (<>
   
    <ul className={css.list}>
        
        {filterContacts.map(contact => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>   ))}   
     
    </ul>    
   {loading && !error && <h2>moments...</h2>}
    
    </>

  );
}

export default ContactList;
