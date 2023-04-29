import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {Loader} from './Loader/Loader';
import { Conteiner, Title } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts, selectIsLoading, selectError } from 'redux/selector';


export function App() {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Conteiner>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contact</Title>
      {contacts.length !== 0 && <Filter />}
      <ContactList />
      {isLoading && !error && <Loader />}
    </Conteiner>
  );
}
export default App;
