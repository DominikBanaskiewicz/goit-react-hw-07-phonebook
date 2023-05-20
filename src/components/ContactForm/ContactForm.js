import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/operations';
import { getStatusContacts } from 'redux/selectors';
export const ContactForm = () => {
  const dispatch = useDispatch();

  let number = '';
  let name = '';
  const contacts = useSelector(getStatusContacts);
  const onhandleSubmit = evt => {
    evt.preventDefault();
    let isNameUnique = false;
    isNameUnique = contacts.some(elem => elem.name === name);
    if (!isNameUnique) {
      const id = nanoid();
      dispatch(addContact({ name, number, id }));
    } else {
      alert('This contact already exist');
    }
    evt.target.reset();
  };

  const handleChange = e => {
    name = e.currentTarget.value;
    console.log(name);
  };

  const handleChangeNumber = e => {
    number = e.currentTarget.value;
  };

  return (
    <>
      <form className={css.form} onSubmit={onhandleSubmit}>
        <label className={css.label}>
          <p className={css.p}>Name</p>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <label className={css.label}>
          <p className={css.p}>Number</p>
          <input
            onChange={handleChangeNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
