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
export const tip = styled.div<{ hover: boolean, position: string }>`
  position: absolute;
  ${({ position }) => {
    switch(position) {
      case 'top':
        return 'top: -200%;left: 50%;';
      case 'left':
        return 'top: 0;left: -100%;';
      case 'right':
        return 'left: 200%;top: 0;';
      default:
        return 'top: -200%;left: 50%;';
    }
  }}
  
  font-size: 8px;
  background: rgb(172, 172, 172);
  padding: 3px;
  border-radius: 3px;
  color: white;

  white-space: nowrap;

  transform: translateX(${({ position }) => {
    switch(position) {
      case 'top':
        return '-50%';
      case 'left':
        return '-100%';
      case 'right':
        return '0';
      default:
        return '-50%';
    }
  }}) scale(${({ hover }) => hover ? 1 : 0});
  transform-origin: center top;
  transition: trasnform 50ms;
`;
