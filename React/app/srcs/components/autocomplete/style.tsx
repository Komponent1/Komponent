import styled from 'styled-components';

export const div = styled.div`
  width: 400px;
  position: relative;

  font-size: 20px;
`;
export const input = styled.input`
  padding: 7px 10px;
  margin: 0;

  width: calc(100% - 24px);
  font-size: 20px;
  border: 2px solid black;
  border-radius: 5px;
`;
export const ul = styled.ul<{ show: boolean }>`
  display: ${({ show }) => show ? 'block' : 'none'};
  
  position: absolute;
  top: auto;
  left: 1px;
  list-style-type: none;

  width: calc(100% - 2px);
  max-height: 100px;
  overflow-y: scroll;
  z-index: 10;
  margin: 0;

  box-shadow: 0px 0px 5px black;
  border-radius: 4px;
  padding: 0px;
  background-color: white;
`;
export const li = styled.li`
  width: calc(100% - 20px);
  margin: 0;
  padding: 7px 10px;
`;
