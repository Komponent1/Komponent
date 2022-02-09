import styled from 'styled-components';

export const layout = styled.div`
  position: relative;
  display: flex;
`;
export const main = styled.div`
  margin-left: 320px;
`;
export const menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  height: 100vh;
  width: 300px;
  overflow-y: scroll;
  box-shadow: 1px 1px 10px grey;
`;
export const li = styled.li`
  list-style-type: none;
  padding-left: 10px;

  &:hover {
    cursor: pointer;
    background-color: rgba(1,1,1,0.5);
  }
`