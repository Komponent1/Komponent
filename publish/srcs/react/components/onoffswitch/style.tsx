import styled from 'styled-components';

export const div = styled.div`
  position: relative;

  width: 40px;
`;
export const icon = styled.div<{ x: number }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;

  position: absolute;
  top: 2px;
  left: 0px;

  box-shadow: 1px 1px 5px black;
  background: white;

  transform: translateX(${({ x }) => x}%);
  transition: transform 0.3s
`;
export const bar = styled.div<{ width: number }>`
  display: inline-block;
  width: ${({ width }) => width}%;
  height: 14px;
  border-radius: 15px;

  transition: width: 0.3s;
`;
export const leftbar = styled(bar)`
  background: rgba(1,1,1,1);
`;
export const rightbar = styled(bar)`
  background: rgba(1,1,1,0.4);
`;
