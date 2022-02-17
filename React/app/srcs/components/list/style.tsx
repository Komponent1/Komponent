import styled from 'styled-components';

export const div = styled.div`
  width: 100%;
`;
export const liTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  padding: 5px;
  
`;
export const li = styled(liTitle)`
  border-radius: 4px;
  &:hover {
    background: rgba(172, 172, 172, 0.5);
  }
`;
export const item = styled.div`
  display: flex;
  align-items: center;

  flex-grow: 1;
  flex-basis: 0;
`;
export const checkbox = styled.div`
  flex-grow: 0;
`
