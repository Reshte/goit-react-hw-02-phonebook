// import PropTypes from 'prop-types';
// import React from "react";

export const Contacts = ({ contactsList, onDeleteContact }) => {
        return (contactsList.map(({id, name, number}) => {
            return (<li key={id} style={{ listStyle: "none" }}>
                    <p>Name: {name}</p>
                    <p>Number: {number}</p>
                    <button type='button' onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>)
    }))
}