import styled from 'styled-components';

export const div = styled.div<{ num: number }>`
  position: absolute;
  top: calc(50% - ${({ num }) => num} * 15px);
  right: 0;
  z-index: 99;
`;
export const item = styled.div<{ select: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid black;

  background: ${({ select }) => select ? 'grey': 'rgba(172, 172, 172, 0.5)'};

  &:hover {
    background: grey;
  }
`;
