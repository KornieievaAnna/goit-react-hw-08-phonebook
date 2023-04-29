import Form from '../components/Form/Form';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Loader } from '../components/Loader/Loader';
import { Conteiner, Title } from '../components/App.styled';
import { useSelector } from 'react-redux';
import {
  selectAllContacts,
  selectLoading,
  // selectError,
} from 'redux/contacts/selectors';

export function App() {
  const contacts = useSelector(selectAllContacts);
  console.log(contacts);
  const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  return (
    <Conteiner>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contact</Title>
      {contacts.length !== 0 && <Filter />}
      <ContactList />
      {isLoading && <Loader />}
      {/* {isLoading && !error && <Loader />} */}
    </Conteiner>
  );
}
export default App;
