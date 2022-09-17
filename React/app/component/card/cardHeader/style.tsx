import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const header = styled.div`
  width: 100%;
  padding: ${theme.padding.xl}px;
`;
export const title = styled.div`
  ${theme.typography.title};
`;
export const subtitle = styled.div`
  ${theme.typography.body};
  color: ${theme.color.black400};
`;
