import styled from 'styled-components';

export const pannel = styled.div`
  width: 100%;
  height: 300px;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;
export const dragable = styled.div<{ xy: number[] }>`
  position: absolute;
  
  transform: translate(${({ xy }) => `${xy[0]}px, ${xy[1]}px`});
`