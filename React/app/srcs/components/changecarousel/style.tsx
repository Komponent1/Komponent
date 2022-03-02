import styled from 'styled-components'

export const div = styled.div<{ width: number, height: number }>`
  position: relative;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
export const item = styled.div<{ opcaity: number }>`
  position: absolute;
  top: 0;
  left: 0;

  opacity: ${({ opacity }) => opacity};
  transition: opacity 1s;
`;
export const btnset = styled.div`
  position: absolute;
  top: 200px;
  text-align: center;
  width: 100%;
`;
export const btn = styled.button<{ select: boolean }>`
  border: ${({ select }) => select ? '1px solid black' : 'none'};
  background: ${({ select }) => select ? 'none' : 'black'};
  
  border-radius: 10px;
  padding: 0;
  margin: 10px;
  width: 10px;
  height: 10px;
`;


