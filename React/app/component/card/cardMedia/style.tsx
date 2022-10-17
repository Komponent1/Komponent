import styled from '@emotion/styled';

export const div = styled.div`
  position: relative;

  width: 100%;
`;
export const img = styled.img<{
  maxHeight: string | number;
  load: boolean;
  err: boolean;
}>`
  position: relative;

  visibility: ${({ load }) => (load ? 'visible' : 'hidden')};
  ${({ load }) => (load ? '' : 'height: 0')};
  display: ${({ err }) => (err ? 'none' : 'block')};
  width: 100%;
  max-height: ${({ maxHeight }) => (typeof (maxHeight) === 'number' ? `${maxHeight}px` : maxHeight)};
  
  object-fit: cover;
  object-position: top left;
`;
