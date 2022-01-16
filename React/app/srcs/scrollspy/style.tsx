import styled from 'styled-components';

const border = styled.div`
  border: 1px solid black;
`;

export const div = styled(border)`
  width: 800px;
`;
export const nav = styled(border)`
  display: flex;
  flex-direction: row;

  border: 1px solid black;
`;
export const navitem = styled<{num: number, select: boolean}>(border)`
  width: calc(100% / ${({ num }) => num});
  height: 20px;

  background: ${({ select }) => select ? 'grey' : 'rgba(0, 0, 0 ,0)'};
  &:hover {
    background: grey;
  }
`;
export const item = styled(border)`
  width: 100%;
  height: 500px;
`;