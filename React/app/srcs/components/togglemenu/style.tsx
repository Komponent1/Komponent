import styled from 'styled-components';

export const togglemenu = styled.div`
  display: flex;
  flex-direction: row;

  border: 1px solid rgba(172, 172, 172, 0.5);
  border-radius: 5px;
`;
export const icon = styled.div<{ select: boolean, last: boolean }>`
  border-right: ${({ last }) => !last ? '1px solid rgba(172, 172, 172, 0.5)' : 'none'};
  background: ${({ select }) => select ? 'rgba(172, 172, 172, 0.1)' : 'none'};

`;
