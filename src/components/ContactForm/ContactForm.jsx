import css from './ContactForm.module.css';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.addNewContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor="">
          <p>Name</p>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
        </label>
        <label htmlFor="">
          <p>Number</p>
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
        </label>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
