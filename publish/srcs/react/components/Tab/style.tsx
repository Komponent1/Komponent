import styled from 'styled-components';

export const div = styled.div`
  width: 500px;

  box-shadow: 3px 3px 3px 3px grey;
`;
export const nav = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: row;
  background: grey;
  color: orange;
`;
export const navitem = styled.div<{ num: number, select: boolean }>`
  width: calc(100% / ${({ num }) => num});
  height: 50px;
  background: ${({ select }) => select ? 'white': 'none'};
`;
export const item = styled.div`
  width: 100%;
  height: 100%;
`;
