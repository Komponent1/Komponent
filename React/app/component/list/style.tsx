import styled from 'styled-components';

export const div = styled.div`
  width: 100%;
  border: 2px solid rgba(172, 172, 172, 0.5);
  border-radius: 5px;
`;
export const liTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  padding: 10px 15px;
  background-color: rgba(172, 172, 172, 0.5);
`;
export const li = styled(liTitle)`
  background-color: white;
  
  &:hover {
    background: rgba(172, 172, 172, 0.2);
  }
`;
export const space = styled.div`
  width: 17px;
`
export const item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-grow: 1;
  flex-basis: 0;
`;
export const checkbox = styled.div`
  flex-grow: 0;
`
