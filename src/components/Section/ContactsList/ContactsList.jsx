import PropTypes from 'prop-types';

import { List, Btn, Contact, Name, Number } from './ContactsList.styled';

export const ContactsList = ({ foundContact, deleteContact }) => {
  return (
    <List>
      {foundContact.map(({ id, name, number }) => {
        return (
          <Contact key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>

            <Btn type="button" onClick={() => deleteContact(id)}>
              delete
            </Btn>
          </Contact>
        );
      })}
    </List>
  );
};

ContactsList.propTypes = {
  foundContact: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};