import PropTypes from 'prop-types';

import ListElement from 'components/ListElement/ListElement';
import { List, ListItem } from 'components/ContactList/ContactList.styled';

const ContactList = ({ data, deleteContact }) => {
  return (
    <List>
      {data
        .sort((elementA, elementB) =>
          elementA.name.localeCompare(elementB.name)
        )
        .map(element => (
          <ListItem key={element.id}>
            <ListElement
              element={element}
              deleteContact={() => deleteContact(element.id)}
            />
          </ListItem>
        ))}
    </List>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
