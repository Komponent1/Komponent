import styled from 'styled-components';

export const div = styled.div`

`;
export const head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;
export const name = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;
export const btn = styled.div`
  padding-top: 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.5rem;
`;
export const ul = styled.ul<{ height: number }>`
  max-height: ${({ height }) => height}rem;
  transition: max-height 0.3s;
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
`;
export const li = styled.li`
  margin: 0;
  padding: 0.2rem 0.6rem;
`;

