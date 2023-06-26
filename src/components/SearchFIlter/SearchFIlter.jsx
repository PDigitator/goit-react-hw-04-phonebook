import PropTypes from 'prop-types';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

const SearchFilter = ({ search }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="name" onChange={search} />
    </Label>
  );
};

SearchFilter.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchFilter;
