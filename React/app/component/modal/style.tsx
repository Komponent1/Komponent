import styled from '@emotion/styled';
import theme from '../styles/theme';

export const modalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${theme.zIndex.modal};
  min-width: 100vw;
  min-height: 100vh;
  background: rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
`;
export const modal = styled.div<{
  width: number | string;
}>`
  background: white;
  width: ${({ width }) => (typeof (width) === 'number' ? `${width}px` : width)};
  margin: auto;
  border-radius: 5px;
`;
export const modalHeader = styled.div`
  ${theme.typography.headline};
  padding: ${theme.padding.xl * 2}px;

  border-bottom: 1px solid ${theme.color.white300};
`;
export const modalContent = styled.div`
  font-size: ${theme.typography.body};
  padding: ${theme.padding.xl * 2}px;

  border-bottom: 1px solid ${theme.color.white300};
`;
export const modalAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: ${theme.padding.xl}px ${theme.padding.xl * 2}px;

  &>.srui-button {
    margin-left: 12px;
  }
`;
