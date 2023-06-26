import PropTypes from 'prop-types';

import { Btn } from 'components/Button/Button.styled';

const Button = ({ text }) => {
  return <Btn type="submit">{text}</Btn>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
