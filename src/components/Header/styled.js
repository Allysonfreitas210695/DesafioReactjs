import styled from 'styled-components';

export const wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
  margin-bottom: 30px;

  input {
    width: 100%;
    border: 1px solid #CCC;
    border-radius: 8px;
    height: 44px;
    padding: 4px 18px;
  }

  button {
    border: none;
    padding: 8px 12px;
    text-transform: uppercase;
    background-color: green;
    margin: 0 8px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
  
    &:hover {
      background-color: rgba(0, 2450, 0, 0.2);
      color: white;
      box-shadow: 8px 2px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
