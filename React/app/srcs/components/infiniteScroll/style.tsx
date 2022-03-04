import styled from 'styled-components';

export const div = styled.div`
  width: 500px;
  height: 300px;
  border: 2px solid black;
  overflow-y: scroll;
`;
export const item = styled.div`
  width: calc(100% - 42px);
  border: 1px solid rgba(172, 172, 172, 0.5);

  padding: 10px 20px;

  &:hover {
    background-color: rgba(172, 172, 172, 0.3);
  }
`;
export const trigger = styled.div<{ show: boolean }>`
  display: ${({ show }) => show ? 'block' : 'none'};
`;
