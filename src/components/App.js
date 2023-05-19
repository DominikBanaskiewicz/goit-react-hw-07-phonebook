import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  return (
    <div className="App">
      <h1>Phonebook12122</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
