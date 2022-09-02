import styled from 'styled-components';

export const div = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid black;
  padding: 5px;
`;
export const icon = styled.div<{ select: boolean }>`
  position: relative;
  border-radius: 5px;
  background-color: ${({ select }) => select ? 'rgba(172, 172, 172, 0.5)' : 'none'};

  p {
    padding: 2px 5px;
    margin: 0;
    z-index: 11;
  }

  &:hover {
    background-color: ${({ select }) => select ? 'rgba(172, 172, 172, 0.5)' : 'rgba(172, 172, 172, 0.2)'};
  }
`;
export const ul = styled.ul<{ show: boolean }>`
  display: ${({ show }) => show ? 'block' : 'none'};
  list-style-type: none;

  padding: 0;
  margin: 0;
  box-shadow 0px 0px 5px grey;
  border-radius: 4px;
  background-color: white;
  z-index: 10;
`;
export const mainul = styled(ul)`
  position: absolute;
  top: auto;
  left: 0;
  width: 100px;
`;
export const subul = styled(ul)`
  position: absolute;
  top: 0;
  left: 100px;
`;
export const li = styled.li<{ sub: boolean }>`
  position: relative;
  padding: 3px;

  &:after {
    content: ${({ sub }) => sub ? '\'>\'' : ''};
  }
`;
