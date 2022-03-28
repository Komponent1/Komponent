import styled from 'styled-components';

export const badge = styled.div`
  position: relative;
`;
export const icon = styled.div<{ count: number }>`
  display: ${({ count }) => count !== 0 ? 'block' : 'none'};
  position: absolute;
  top:-8px;
  right:-8px;

  width: 15px;
  height: 15px;
  border-radius: 8px;
  
  background: blue;
  color: white;
  font-size: 10px;
  text-align: center;  
`;
