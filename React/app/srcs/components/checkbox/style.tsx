import styled from 'styled-components';

export const box = styled.div`
  display: inline-block;
  position: relative;
`;
export const outline = styled.div<{ checked: boolean }>`
  display: inline-block;

  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 2px solid ${({ checked }) => checked ? '#252553' : 'rgba(0, 0, 0, 0.5)'};
  background: ${({ checked }) => checked ? '#252553' : 'white'};

  color: white;
  text-align: center;
  line-height: 16px;
`
export const background = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;

  width: 40px;
  height: 40px;
  border-radius: 20px;
  opacity: 0;

  background: rgba(0, 0, 0, 0.05);

  &:hover {
    opacity: 1;
  }
`;
export const wave = styled.div<{ duration: number, scale: number, opacity: number }>`
  position: absolute;
  top: -10px;
  left: -10px;

  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);

  opacity: ${({ opcaity }) => opcaity};
  transform: scale(${({ scale }) => `${scale},${scale}`});
  transform-origin: center;
  transition: transform ${({ duration }) => duration}s;
`;
