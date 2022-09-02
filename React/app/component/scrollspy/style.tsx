import styled from 'styled-components';

export const div = styled.div`
  position: relative;
`;
export const itemwrapper = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  
  overflow-y: scroll;
`;
export const item = styled.div`
  width: 100%;
`;