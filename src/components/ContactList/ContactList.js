import css from './ContactList.module.css';
import React from 'react';
import { getStatusContacts, getStatusFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { removeContactAction } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const contacts = useSelector(getStatusContacts);

  const getFilteredContacts = () => {
    let tmp = '';
    filter ? (tmp = filter) : (tmp = '');
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(tmp.toLowerCase())
    );
  };

  const handleDelete = id => {
    dispatch(removeContactAction(id));
  };

  const contactsToPreview = getFilteredContacts();
  return (
    <ul>
      {contactsToPreview.map(elem => (
        <li className={css.list__elem} key={elem.id}>
          <span className={css.name}>{elem.name}</span>
          <span className={css.number}>{elem.number}</span>
          <button
            className={css.button}
            type="Button"
            onClick={() => handleDelete(elem.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
