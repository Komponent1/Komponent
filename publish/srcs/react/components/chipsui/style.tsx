import styled from 'styled-components'

export const div = styled.div`
  display: flex;
  flex-direction: row;
`;
export const wrapper = styled.div`
  
`;
export const chip = styled.div`
  display: inline-flex;
  align-items: center;

  background: rgba(172, 172, 172, 0.3);
  
  padding: 4px 5px;
  margin: 0 2px;
  border-radius: 30px;

  > span {
    margin-left: 10px;
  }
`;
export const del = styled.div`
  display: block;
  color: white;
  font-size: 10px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  background: rgba(110, 110, 110, 1);
  margin-left: 10px;

  cursor: pointer;
`;
export const input = styled.input`
  font-size: 15px;
  border: none;

  &:focus {
    outline: none;
  }
`;
