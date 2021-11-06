import './App.css';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }   
  }

  handleFormSubmit = ({ name, number }) => {
    const { contacts } = this.state;

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (contacts.find(el => el.name === contact.name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  handleFilterChange = ({ target }) => {
    const { value } = target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = id => {
     this.setState(({contacts}) => ({
      contacts: contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    const { filter } = this.state;
    const { handleFormSubmit, handleFilterChange, getFilteredContacts, deleteContact } =
      this;
    const filteredContacts = getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleFormSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onFilterChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
      </div>
    );
  }
}

export default App;
