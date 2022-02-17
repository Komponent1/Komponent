import styled from 'styled-components';

export const pannel = styled.div`
  width: 80%;
  height: 300px;
`;
export const dragable = styled.div<{ xy: number[] }>`
  position: absolute;
  
  transform: translate(${({ xy }) => `${xy[0]}px, ${xy[1]}px`});
`