import styled from 'styled-components';

export const Contacts = styled.li`
  margin-top: 10px;
`;

export const ButtonDelete = styled.button`
  padding: 3px 10px;
  background-color: #050801;
  color: #fffad9;
  font-weight: bold;
  border: solid;
  border-radius: 5px;
  letter-spacing: 4px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  margin: 0px 10px;
  &:hover {
    background: #fffad9;
    color: #050801;
    box-shadow: 0 0 5px #fffad9, 0 0 25px #fffad9, 0 0 50px #fffad9,
      0 0 70px #fffad9;
  }
`;
