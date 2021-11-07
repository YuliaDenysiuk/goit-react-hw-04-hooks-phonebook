import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

function ContactForm({onSubmit}) {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact({
      ...contact,
      [name]: value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(contact);
    reset();
  };

  const reset = () => {
    setContact(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.form__label}>
        Name
        <input
          type="text"
          className={s.form__input}
          name="name"
          value={contact.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.form__label}>
        Number
        <input
          type="tel"
          className={s.form__input}
          name="number"
          value={contact.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.form__button}>Add contact</button>
    </form>
  );
}


ContactForm.propTypes = {
  target: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactForm;
