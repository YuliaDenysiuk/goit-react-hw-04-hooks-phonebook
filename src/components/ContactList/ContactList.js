import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contacts__item}>
          {name}: {number}
          <button type="button" className={s.contacts__button} onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
