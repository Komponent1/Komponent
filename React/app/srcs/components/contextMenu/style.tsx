import styled from 'styled-components';

export const wrapper = styled.div`
  display: inline-block;
  
  border-radius: 2px;
  box-shadow: 1px 1px 1px 1px gray;
`;
export const item = styled.div`
  display: block;
  position: relative;
  
  width: 200px;
  height: 20px;
  padding: 5px 10px;
  line-height: 20px;
  margin: 0;

  &:hover {
    cursor: pointer;
    background-color: rgba(172, 172, 172, 0.2);
  }
`;
export const context = styled.div<{top: number, left: number, visible: boolean}>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  
  display: ${({ visible }) => visible ? 'inline-block' : 'none'};
  z-index: 99;

  border-radius: 5px;
  padding: 10px;
  margin: 0;
  box-shadow: 1px 1px 1px 1px gray;
  background-color: rgb(240, 240, 240);
`;
