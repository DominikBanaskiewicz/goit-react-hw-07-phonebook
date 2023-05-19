import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContactAction } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const dispatch = useDispatch();

  let number = '';
  let name = '';

  const onhandleSubmit = evt => {
    evt.preventDefault();
    dispatch(addContactAction(name, number, nanoid()));
    evt.target.reset();
  };

  const handleChange = e => {
    name = e.currentTarget.value;
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
