import styled from 'styled-components';

export const div = styled.div`
  display: inline-block;
  position: relative;
`;
export const ul = styled.div`
  position: absolute;
  top: auto;
  right: 0;

  width: 100px;
  border: 1px solid rgba(172, 172, 172, 0.5);
`;
export const li = styled.div`
  width: 100%;

  &:bover{
    background: rgba(172, 172, 172, 0.5);
  }
`;
