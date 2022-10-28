import styled from '@emotion/styled';
import theme from '../styles/theme';

export const bookmark = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  width: 100%;

  cursor: pointer;
  border: 1px solid ${theme.color.white400};
`;
export const images = styled.img`
  flex-grow: 0;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;
export const information = styled.div`
  flex-grow: 1;
  padding: 15px 12px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;
`;
export const title = styled.div`
  ${theme.typography.title};
  margin-bottom: 4px;
`;
export const description = styled.div`
  ${theme.typography.caption};
  color: ${theme.color.black400};
`;
export const url = styled(description)`
  margin-bottom: 4px;
  white-space: nowrap;
`;
