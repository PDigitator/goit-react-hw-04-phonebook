import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  padding: 10px 20px;
  border: 1px solid #e5eaf1;
  border-radius: 8px;
  background-color: #fff;
`;

export { List, ListItem };
