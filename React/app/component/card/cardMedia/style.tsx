import styled from '@emotion/styled';

export const div = styled.div`
  position: relative;

  width: 100%;
`;
export const img = styled.img<{
  maxHeight: string | number;
}>`
  position: relative;

  width: 100%;
  max-height: ${({ maxHeight }) => (typeof (maxHeight) === 'number' ? `${maxHeight}px` : maxHeight)};
  
  object-fit: cover;
  object-position: top left;
`;
