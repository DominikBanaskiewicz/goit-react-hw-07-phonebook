import PropTypes from 'prop-types';
import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterAction } from 'redux/filterSlice';
import { getStatusFilter, getStatusContacts } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const contacts = useSelector(getStatusContacts);

  const getFilteredContacts = () => {
    let tmp = '';
    console.log(filter);
    filter ? (tmp = filter) : (tmp = '');
    console.log(tmp);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(tmp.toLowerCase())
    );
  };

  const handleFilterChange = evt => {
    dispatch(changeFilterAction(evt.currentTarget.value));
    getFilteredContacts();
    return dispatch(changeFilterAction(evt.currentTarget.value));
  };

  return (
    <div className={css.div}>
      <p className={css.p}> Find contacts by name</p>
      <input
        onChange={handleFilterChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func,
};
