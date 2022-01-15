import styled from 'styled-components';

export const item = styled.div`
  display: block;
  position: relative;
  
  width: 200px;
  height: 20px;

  &:hover {
    cursor: pointer;
    background-color: gray;
  }
`;
export const context = styled.div<{top: number, left: number, visible: boolean}>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  display: ${({ visible }) => visible ? 'inline-block' : 'none'};
  z-index: 99;

  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px gray;
  width: 100px;
  height: 100px;
  background-color: rgb(240, 240, 240);
`;
export const wrapper = styled.div`
  display: inline-block;
  
  border-radius: 2px;
  box-shadow: 1px 1px 1px 1px gray;
`;