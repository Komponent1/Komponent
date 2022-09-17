import styled from '@emotion/styled';
import theme from '../../styles/theme';

export type CardDesign = 'border' | 'shadow';
export type CardWidth = number | string;
export const card = styled.div<{
  design: CardDesign;
  width: CardWidth;
  maxWidth?: CardWidth;
  minWidth?: CardWidth;
  isAction: boolean;
}>`
  width: ${({ width }) => (typeof (width) === 'number' ? `${width}px` : width)};
  ${({ maxWidth }) => (maxWidth ? `max-width: ${(typeof (maxWidth) === 'number' ? `${maxWidth}px` : maxWidth)}` : null)};
  ${({ minWidth }) => (minWidth ? `min-width: ${(typeof (minWidth) === 'number' ? `${minWidth}px` : minWidth)}` : null)};

  border-radius: 4px;
  ${({ design }) => (design === 'border'
    ? `border: 1px solid ${theme.color.white300}`
    : 'box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px')};

  transition: transform 0.5s ease-out;
  &:hover {
    ${({ isAction }) => (isAction ? 'transform: translateY(-2px)' : null)};
  }

  overflow: hidden;
`;
