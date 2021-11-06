import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onFilterChange }) {
  return (
    <>
      <p className={s.filter}>Find contacts by name</p>
      <input
        type="text"
        className={s.filter__input}
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={onFilterChange}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
