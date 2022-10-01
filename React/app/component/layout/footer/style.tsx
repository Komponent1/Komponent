import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const footer = styled.footer<{
  hasFooter: boolean;
}>`
  display: ${({ hasFooter }) => (hasFooter ? 'flex' : 'none')};
  flex-direction: row;
  width: 100%;
  background: ${({ color }) => color};
  min-height: ${theme.boxSize.headerHeight}px;
`;
