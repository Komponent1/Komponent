import styled from 'styled-components';

export const div = styled.div<{ width: number }>`
  position: relative;
  width: ${({ width }) => width}px;
  height: 20px;
`;
export const slider = styled.div<{ scale: number }>`
  display: inline-block;
  width: ${({ scale }) => scale}%;
`;
export const up = styled(slider)`
  background: rgba(1,1,1,1);
  
  height: 8px;
  border-radius: 4px;
  margin-bottom: 6px;
`;
export const down = styled(slider)`
  background: rgba(1,1,1,0.3);

  height: 6px;
  border-radius: 3px;
  margin-bottom: 7px;
`;
export const markder = styled.div<{ value: number }>`
  position: absolute;
  top: -1px;
  left: -10px;

  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: rgba(1,1,1,1);

  transform: translateX(${({ value }) => value}px);
`;
