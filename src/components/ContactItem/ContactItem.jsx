import css from './ContactItem.module.css';
export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id}>
      <span>{name}:</span>
      <span> {number}</span>
      <button
        className={css.buttonDelete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
