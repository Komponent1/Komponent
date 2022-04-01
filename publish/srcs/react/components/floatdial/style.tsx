import styled, { css, keyframes } from 'styled-components';

export const div = styled.div`
  position: relative;
`;
export const button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: rgb(150, 150, 150);

  text-align: center;
  font-size: 20px;
  line-height: 40px;

  box-shadow: 1px 1px 5px rgb(172, 172, 172);

  &:hover {
    transform: rotate(45deg);
    transform-origin: center;
    transition: transform 0.5s;
  }
`;
export const list = styled.div<{ hover: boolean }>`
  display: ${({ hover }) => hover? 'block' : 'none'};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);

  >.kui_tip>.kui_tip_background {
    display: none !important;
  }
  >.kui_tip>.kui_tip_tip {
    left: -50% !important;
  }
`;

const appear = keyframes`
  from {
    transform: scale(0, 0);
  } to {
    transform: scale(1, 1);
  }
`;

export const item = styled.div<{ scale: number, hover: boolean }>`
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
  border-radius: 30px;

  font-size: 15px;
  text-align: center;
  line-height: 30px;

  box-shadow: 1px 1px 5px rgba(172, 172, 172);
  background: white;

  transform: scale(${({ scale }) => `${scale},${scale}`});
  transition: transform 0.3s;

  animation: ${({ hover }) => hover ? css`${appear} 0.3s`: ''};
`;
