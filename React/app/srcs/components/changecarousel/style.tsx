import styled from 'styled-components'

export const div = styled.div<{ width: string, height: string }>`
  position: relative;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
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
  bottom: 10%;
  text-align: center;
  width: 100%;
`;
export const btn = styled.button<{ select: boolean }>`
  border: none;
  padding: 0;
  margin: 4px;
  width: 30px;
  height: 20px;
  background: none;

  &:hover {
    cursor: pointer;
  }

  div {
    width: 100%;
    height: 4px;
    background: ${({ select }) => select ? 'white' : 'grey'};
  }
`;
