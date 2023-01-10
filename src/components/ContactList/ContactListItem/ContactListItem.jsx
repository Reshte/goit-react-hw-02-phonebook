// import PropTypes from 'prop-types';

export const ContactListItem =({id,name,number,onDeleteContact}) =>{return(  
<Item key={id}>
<p>{name} : {number}</p>
<button type='button' onClick={() => onDeleteContact(id)}>Delete</button>
</Item>)  
}