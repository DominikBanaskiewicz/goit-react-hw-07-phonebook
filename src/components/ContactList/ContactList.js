import css from './ContactList.module.css';
import React from 'react';
import { selectVisibleContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const contactsToPreview = useSelector(selectVisibleContacts);
  return (
    <ul>
      {contactsToPreview.map(elem => (
        <li className={css.list__elem} key={elem.id}>
          <span className={css.name}>{elem.name}</span>
          <span className={css.number}>{elem.phone}</span>
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
