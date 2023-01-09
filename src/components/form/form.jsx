import { Component } from "react";

export default class Form extends Component {
    state = {
    name: '',
    number: ''
    }

     handelInputChange = (e) => {
     this.setState({ [e.currentTarget.name]:e.currentTarget.value})
    }
    
     handlerAddContact = (e) => {
    e.preventDefault()
         this.props.onSubmit(this.state);
         this.reset()
    }
    
    reset = () => {
        this.setState({name: '',
    number: ''})
    }

    
    render() {
        const { name, number } = this.state
        
        return (<form onSubmit={this.handlerAddContact}>
          <label htmlFor="" > Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={this.handelInputChange}
              required />
          </label>      
          <label htmlFor=""> Number
            <input
             type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handelInputChange}
                />
          </label>
          <button type="submit">Add contact</button>       
          </form>)
        
    }
}