import styled from 'styled-components';

export const wrapper = styled.div`
  position: relative;

  width: 500px;
  height: 500px;
  overflow: hidden;
`;
export const slider = styled.div<{ idx: number, sec: number }>`
  display: flex;
  width: 3000px;

  transform: translateX(calc(500px * ${({ idx }) => idx} * -1));
  transition: transform ${({ sec }) => sec}s ease-out;
`;
export const item = styled.div`
  width: 500px;
  height: 350px;
`;
export const button = styled.button<{ position: string }>`
  background: none;
  color : white;
  width: 40px;
  height: 30px;
  font-weight: bold;
  border: none;

  position: absolute;
  top: 150px;
  ${({ position }) => position}: 10px;
`;
