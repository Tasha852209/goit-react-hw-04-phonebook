import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    if (!stringifiedContacts) return;
    const parsedContacts = JSON.parse(stringifiedContacts) ?? [];
    if (parsedContacts.length > 0) {
      setContacts(parsedContacts);
    }
  }, []);

  // const componentDidMount() {
  //   const stringifiedContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(stringifiedContacts) ?? [];
  //   this.setState({
  //     contacts: parsedContacts,
  //   });
  // }

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);
  // componentDidUpdate(_, prevState) {
  //   if (this.state.contacts.length !== prevState.contacts.length) {
  //     const stringifiedContacts = JSON.stringify(this.state.contacts);
  //     localStorage.setItem('contacts', stringifiedContacts);
  //   }
  // }
  const addNewContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    contacts.some(({ name }) => name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };
  // const addNewContact = data => {
  //   const { contacts } = this.state;
  //   const newContact = {
  //     id: nanoid(),
  //     ...data,
  //   };
  //   contacts.some(({ name }) => name === data.name)
  //     ? alert(`${data.name} is already in contacts`)
  //     : this.setState(prevState => ({
  //         contacts: [...prevState.contacts, newContact],
  //       }));
  // };
  const handleFilterContacts = e => {
    setFilter(e.target.value);
  };
  // handleFilterContacts = e => {
  //   this.setState({
  //     filter: e.target.value,
  //   });
  // };
  const getFilterContacts = () => {
    const filterlowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterlowerCase)
    );
  };
  // getFilterContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const filterlowerCase = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filterlowerCase)
  //   );
  // };
  const onDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };
  // onDeleteContact = contactId => {
  //   this.setState(prevstate => ({
  //     contacts: prevstate.contacts.filter(({ id }) => id !== contactId),
  //   }));
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact}></ContactForm>
      <h2>Contacts</h2>
      <Filter value={filter} handleFilterContacts={handleFilterContacts} />
      <ContactList
        contacts={getFilterContacts()}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};
