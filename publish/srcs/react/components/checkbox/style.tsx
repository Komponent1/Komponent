import styled from 'styled-components';

export const box = styled.div`
  display: inline-block;

  border: 1px solid #D0D0D0;
  border-radius: 3px;

  width: 15px;
  height: 15px;

  background-color: ${({ checked }) => checked ? '#235202' : 'white'};
`;
