import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
`;

const Label = styled.label`
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 80%;

  font-size: 20px;
  font-weight: bold;
  color: #768696;
`;

const Input = styled.input`
  padding: 10px;

  border: 1px solid #e5eaf1;
  border-radius: 8px;

  font-size: 20px;
  color: #112236 !important;
`;

export { Form, Label, Input };
