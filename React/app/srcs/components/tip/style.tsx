import styled from 'styled-components';

export const div = styled.div`
  position: relative;
`;
export const background = styled.div`
  position: absolute;
  top: -60%;
  left: -60%;

  width: 220%;
  height: 220%;

  background: rgba(172, 172, 172, 0.3);
  border-radius: 100%;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;
export const tip = styled.div<{ hover: boolean }>`
  position: absolute;
  top: 200%;
  left: 50%;
  
  font-size: 8px;
  background: rgb(172, 172, 172);
  padding: 3px;
  border-radius: 3px;
  color: white;

  white-space: nowrap;

  transform: translateX(-50%) scale(${({ hover }) => hover ? 1 : 0});
  transform-origin: center top;
  transition: trasnform 50ms;
`;
