import React, { Component } from "react";
import { Contacts } from "./contacts/Contacts";


export class App extends Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},],
  name: '',
  number: ''
  }
  
  handlerAddContact = (e) => {
    e.preventDefault()
    console.log(e.currentTarget.firstElementChild)
        this.setState(prevState => {
      return( prevState )
    })
  }

  
  render() {
    const {contacts,name, number} = this.state
    
    return (
        <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }} >
        <form onSubmit={this.handlerAddContact}>
          <label htmlFor="" > Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required/>
          </label>
       
   <label htmlFor=""> Number
      <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
   </label>
        <button type="submit">Add contact</button>       
        </form>
        < Contacts contactsList={contacts} />
        
</div>
  )    
  }
}



