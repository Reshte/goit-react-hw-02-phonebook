import React, { Component } from "react";
import { Contacts } from "./contacts/Contacts";
import Form from 'components/form/form'
import { Filter } from "./filter/Filter";

const shortid = require('shortid');

export class App extends Component {
  state = {
  contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
    }
  
  handelFormSbmit = ({ name, number }) => {
    const isNameInContacts = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase().trim())
     if(isNameInContacts){
    alert(`${name} is already in contacts`)
   } else {this.setState(prevState => ({
     contacts: [...prevState.contacts, { id: shortid.generate(), name, number } ],
    }))}
   }
 
  filterContact = (e) => {
        this.setState({filter: e.currentTarget.value})
      }
   
  deleteContact = id => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }))
     }
  
  render() {
    const { contacts, filter } = this.state
    const filterNormalise = filter.toLowerCase().trim()
    const filterElemens = contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalise))
   
      
    return (
        <div
      style={{
        height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10,
        color: '#010101'
      }} >
        <Form onSubmit={this.handelFormSbmit} />
        <Filter value={filter} onChange={this.filterContact } />
        <Contacts contactsList={filterElemens} onDeleteContact={this.deleteContact} />
        
</div>
  )    
  }
}



