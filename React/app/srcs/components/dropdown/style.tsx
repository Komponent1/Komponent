import styled from 'styled-components';

export const div = styled.div`
  position: relative;
`;
export const box = styled.div<{ active: boolean, value: string }>`
  width: 50px;
  height: 30px;
  border: 2px solid ${({ active }) => active ? 'rgba(1,1,1, 1)' : 'rgba(0,0,0, 0.4)'};
  border-radius: 4px;
  padding: 0 10px;
  line-height: 30px;

  color: ${({ value }) => value === '' ? 'rgb(172, 172, 172)' : 'black'};
`;
export const menu = styled.div<{ show: boolean }>`
  display: ${({ show }) => show ? 'block' : 'none'};
  position: absolute;
  top: auto;
  left: 1px;

  width: 72px;
  background: white;
  box-shadow: 0px 0px 5px black;
  border-radius: 4px;
`;
export const item = styled.div`
  width: calc(100% - 20px);
  padding: 4px 10px;

  &:hover {
    background: rgba(172, 172, 172, 0.2);
  }
`;
