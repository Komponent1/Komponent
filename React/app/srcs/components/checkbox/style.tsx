import styled from 'styled-components';

export const box = styled.div`
  border: 1px solid #D0D0D0;
  border-radius: 3px;

  width: 20px;
  height: 20px;

  background-color: ${({ checked }) => checked ? '#235202' : 'white'};
`;
