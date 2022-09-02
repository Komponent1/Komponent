import styled from 'styled-components';

export const div = styled.div<{ height: string }>`
  overflow-y: scroll;
  height: ${({ height }) => height};
`;
export const layer = styled.div<{ y: number }>`
  --y: 0;
  transform: translateY(var(--y));
`;
