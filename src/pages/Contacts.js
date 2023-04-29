import Form from '../components/Form/Form';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Loader } from '../components/Loader/Loader';
import { Conteiner, Title } from '../components/App.styled';
import { useSelector } from 'react-redux';
import {selectLoading} from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet';

export function Contacts() {
  const isLoading = useSelector(selectLoading);


  return (
    <Conteiner>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contact</Title>
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
    </Conteiner>
  );
}
export default Contacts;
