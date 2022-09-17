import styled from '@emotion/styled';
import theme from '../../styles/theme';

export type CardContentDisplay = 'row' | 'column';
export const cardContent = styled.div<{
  display: CardContentDisplay,
}>`
  width: 100%;
  ${({ display }) => (display === 'row'
    ? 'display: flex;flex-direction: row'
    : null)};

  padding: ${theme.padding.xl}px;
  ${theme.typography.subtitle};
`;
