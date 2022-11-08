import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const header = styled.div`
  width: calc(100% - ${theme.padding.xl * 2});
  padding: ${theme.padding.xl}px;
`;
export const title = styled.div`
  ${theme.typography.title};
`;
export const subtitle = styled.div`
  ${theme.typography.body};
  color: ${theme.color.black400};
`;
