import styled from '@emotion/styled';
import theme from '../styles/theme';

export const table = styled.table`
  width: calc(100% - 2px);
  font-size: ${theme.size.s}px;
  border-collapse: collapse;

  border-style: hidden;
  box-shadow: 0 0 0 1px ${theme.color.white400};
  border-radius: 2px;  
`;
export const thead = styled.thead`
  text-align: left;
`;
export const tbody = styled.tbody`
  &>tr {
    &:hover {
      background: ${theme.color.white300};
    }
  } 
`;
export const th = styled.th`
  padding: ${theme.padding.xxl * 2}px ${theme.padding.xxxl}px;
  border-bottom: 1px solid ${theme.color.white400};
  position: relative;

  &:before {
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: ${theme.size.xxxl}px;
    background-color: ${theme.color.white400};
    transform: translateY(-50%);
    content: "";
  };
`;
export const sortIcon = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`;
export const tr = styled.tr`
  
`;
export const td = styled.td`
  padding: ${theme.padding.xxl * 2}px ${theme.padding.xxxl}px;
  border-bottom: 1px solid ${theme.color.white400};
`;
