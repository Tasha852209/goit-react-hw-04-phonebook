import React from 'react';
import css from './Filter.module.css';
export const Filter = ({ value, handleFilterContacts }) => {
  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input value={value} type="text" onChange={handleFilterContacts} />
    </div>
  );
};
