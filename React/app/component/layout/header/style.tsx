import styled from '@emotion/styled';
import theme from '../../styles/theme';

export type HedaerDesign = 'always' | 'scroll' | 'top';

const designSet = {
  always: () => `
    position: fixed;
    top: 0;
  `,
  scroll: (opacity?: number, margin?: number) => `
    position: fixed;
    top: 0;
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
    opacity: ${opacity};
    margin-top: ${margin}px;
  `,
  top: () => `

  `,
};
export const header = styled.header<{
  hasHeader: boolean;
  design: HedaerDesign;
  color: string;
  opacity?: number;
  margin?: number;
}>`
  display: ${({ hasHeader }) => (hasHeader ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  ${({ design, opacity, margin }) => designSet[design](opacity, margin)};
  height: ${theme.boxSize.headerHeight}px;
  width: 100%;
  background: ${({ color }) => color};
`;
