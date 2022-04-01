import styled from 'styled-components';

export const div = styled.div`
  border: 1px solid rgba(172, 172, 172, 0.5);
  text-align: center;
`;
export const nav = styled.div`
  position: relative;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  background: rgba(172, 172, 172, 0.5);
  color: black;
  font-weight: 900;
`;
export const navitem = styled.div<{ num: number }>`
  width: calc(100% / ${({ num }) => num});
  z-index: 13;
`;
export const item = styled.div`
  width: 100%;
  height: 100%;
`;
export const glider = styled.div<{ num: number, idx: number}>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 12;
  background-color: white;

  width: calc(100% / ${({ num }) => num});
  height: 100%;
  transform: translateX(calc(100% * ${({ idx }) => idx}));
  transition: transform 0.3s;
`;