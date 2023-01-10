import PropTypes from 'prop-types';
import {ContactListItem} from './ContactListItem/ContactListItem'
import { List, Item } from './ContactList.styled'


export const ContactList = ({ contactsList, onDeleteContact }) => {
        return ( 
        <List>
        {contactsList.map(({ id, name, number }) => (
        <ContactListItem key={id} name ={name} number={number} onDeleteContact={onDeleteContact}/>))}
        </List> )
}

ContactList.proptypes ={
    contactsList:PropTypes.array,
    onDeleteContact:PropTypes.func,
}