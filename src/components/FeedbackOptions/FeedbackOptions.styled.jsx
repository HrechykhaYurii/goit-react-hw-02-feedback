import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ButtonItem = styled.li`
  :hover:nth-of-type(1) button {
    background-color: rgba(0, 255, 0, 0.7);
  }
  :hover:nth-of-type(2) button {
    background-color: rgba(255, 200, 0, 0.7);
  }
  :hover:nth-of-type(3) button {
    background-color: rgba(255, 50, 0, 0.7);
  }
`;

export const Button = styled.button`
  padding: 5px 25px;
  font-size: 24px;
  color: #6a9bd8;
  text-transform: capitalize;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid #6a9bd8;
  
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover {
    color: #ebf5fc;
    border: 2px solid transparent;
  }
`;