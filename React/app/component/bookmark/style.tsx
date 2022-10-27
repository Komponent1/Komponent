import styled from '@emotion/styled';
import theme from '../styles/theme';

export const bookmark = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  width: 100%;

  cursor: pointer;
`;
export const images = styled.img`
  flex-grow: 0;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;
export const information = styled.div`
  flex-grow: 1;
  border: 1px solid ${theme.color.white400};
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const title = styled.div`
  ${theme.typography.title};
`;
export const description = styled.div`
  ${theme.typography.caption};
  color: ${theme.color.black400};
`;
