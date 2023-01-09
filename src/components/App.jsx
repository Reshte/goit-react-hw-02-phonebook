import React, { Component } from "react";
import { Contacts } from "./contacts/Contacts";
import Form from 'components/form/form'

const shortid = require('shortid');
const contactId = shortid.generate();
 
export class App extends Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},],
  name: '',
  number: ''
  }
  
  handelFormSbmit = data => {
    const contact = {
      id: contactId,
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
   }
 
  deleteContact = id => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }))
     }
  
  render() {
    const {contacts} = this.state
    
    return (
        <div
      style={{
        height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }} >
        <Form onSubmit={this.handelFormSbmit} />
        <Contacts contactsList={contacts} onDeleteContact={this.deleteContact} />
        
</div>
  )    
  }
}



