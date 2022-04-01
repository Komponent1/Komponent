import styled from 'styled-components';

export const wrapper = styled.div<{ width: string, height: string }>`
  --width: ${({ width }) => width};
  position: relative;

  width: var(--width);
  height: ${({ height }) => height};
  overflow: hidden;
`;
export const slider = styled.div<{ idx: number, sec: number, num: number }>`
  display: flex;
  width: calc(${({ num }) => num} * var(--width));
  height: 100%;

  transform: translateX(calc(var(--width) * ${({ idx }) => idx} * -1));
  transition: transform ${({ sec }) => sec}s ease-out;
`;
export const item = styled.div`
  width: var(--width);
  height: 100%;
`;
export const button = styled.button<{ position: string }>`
  background: none;
  color : white;
  font-weight: bold;
  border: none;
  font-size: 30px;

  position: absolute;
  top: calc(50% - 15px);
  ${({ position }) => position}: 10px;
`;
