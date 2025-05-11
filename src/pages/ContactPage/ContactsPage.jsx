import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { selectLoading } from '../../redux/contacts/selectors';
import { fetchDataThunk } from '../../redux/contacts/operations';


export const ContactsPage = () => {

 const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  return (
    <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <div>{isLoading && 'Request in progress...'}</div>
        <SearchBox/>
        <ContactList/>
    </div>
  )
}

export default ContactsPage
