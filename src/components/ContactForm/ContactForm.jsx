import css from './ContactForm.module.css';
import { useState } from 'react';

const INITIAL_FORM_STATE = {
  name: '',
  number: '',
};

export const ContactForm = ({ addNewContact }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name: formData.name,
      number: formData.number,
    };
    addNewContact(newContact);
    setFormData({ name: '', number: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="">
        <p>Name</p>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
        />
      </label>
      <label htmlFor="">
        <p>Number</p>
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={formData.number}
          required
        />
      </label>
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};
