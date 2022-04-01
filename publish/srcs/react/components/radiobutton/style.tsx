import styled from 'styled-components';

export const div = styled.div<{ flex: string }>`
  --height: 30px;

  display: flex;
  flex-direction: ${({ flex }) => flex};
  height: var(--height);
`;
export const btnset = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  margin: 0 10px;
`;
export const button = styled.div`
  position: relative;

  height: 100%;
  width: var(--height);
  --opacity: 0;

  &:hover {
    --opacity: 1;
  }
`;
export const btnbackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%:
  heigth: 100%:
  border-radius: 50%;
  background-color: rgba(172, 172, 172, 0.3);

  opacity: var(--opacity);
`
export const btnicon = styled.div<{ select: boolean }>`
  position: absolute;
  top: 8px;
  left: 8px;

  height: calc(100% - 16px);
  width: calc(100% - 16px);
  border-radius: 50%;
  background-color: black;

  transform: scale(${({ select }) => select ? '1' : '0'});
  transition: transform 0.3s;
`;
export const btnround = styled.div<{ select: boolean }>`
  position: absolute;
  top: 4px;
  left: 4px;

  height: calc(100% - 12px);
  width: calc(100% - 12px);
  border-radius: 50%;

  border: 2px solid ${({ select }) => select ? 'black' : 'rgba(172, 172, 172, 0.5)'};
`
export const label = styled.div`

`;
