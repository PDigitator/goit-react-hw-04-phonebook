import PropTypes from 'prop-types';

import {
  Paragraph,
  Span,
  Btn,
} from 'components/ListElement/ListElement.styled';

const ListElement = ({ element: { name, number }, deleteContact }) => {
  return (
    <>
      <Paragraph>
        {name}:<Span>{number}</Span>
      </Paragraph>
      <Btn onClick={deleteContact}>Delete</Btn>
    </>
  );
};

ListElement.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ListElement;
