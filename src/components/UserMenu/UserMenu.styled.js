import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  padding: 10px 30px;
  background-color: #050801;
  color: #fffad9;
  font-weight: bold;
  border: solid;
  border-radius: 5px;
  letter-spacing: 4px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  margin: 20px;
  &:hover {
    background: #fffad9;
    color: #050801;
    box-shadow: 0 0 5px #fffad9, 0 0 25px #fffad9, 0 0 50px #fffad9,
      0 0 70px #fffad9;
  }
`;
