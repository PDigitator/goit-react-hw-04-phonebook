import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { Container, MainTitle, Title } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFIlter/SearchFIlter';
import ContactList from 'components/ContactList/ContactList';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      Report.info('SORRY', `${newContact.name} is already in contacts.`, 'Ok');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  changedFilter = evt => {
    this.setState({ filter: evt.target.value.trim() });
  };

  searchContact = () => {
    const { contacts, filter } = this.state;

    const normalisedFilter = filter.toLowerCase();

    const searchedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );

    return searchedContacts;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(element => element.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={this.addContact} />
        <Title>Contacts</Title>
        <SearchFilter search={this.changedFilter} />
        {contacts.length ? (
          <ContactList
            data={this.searchContact()}
            deleteContact={this.deleteContact}
          />
        ) : (
          <Notification message="There are no contacts in the phone book" />
        )}
      </Container>
    );
  }
}

export default App;
