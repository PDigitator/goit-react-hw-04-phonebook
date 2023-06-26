import styled from 'styled-components';

const Btn = styled.button`
  width: 80%;
  height: 40px;
  padding: 0;
  border-radius: 20px;

  border: 2px solid #e5eaf1;
  cursor: pointer;

  background-color: #f3f6f9;
  text-transform: capitalize;
  font-size: 20px;
  color: #768696;

  &:hover,
  &:focus {
    color: #112236;
    filter: brightness(0.95);
    box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export { Btn };
