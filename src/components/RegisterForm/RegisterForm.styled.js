import styled from 'styled-components';
export const Forms = styled.form`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #fffad9;
  font-size: 24px;
  justify-content: center;
  display: flex;
  margin: 15px;
  font-weight: bold;
  transition: 0.5s ease-in-out;
`;

export const Input = styled.input`
  height: 35px;
  width: 400px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

export const RegBtn = styled.button`
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
