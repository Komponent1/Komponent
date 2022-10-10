import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import theme from '../../styles/theme';
import { LoadingScale, LoadingSpeed } from '../style.d';

const spinnerAnim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Speed = {
  slow: 0.6,
  medium: 1.2,
  fast: 1.8,
};
const Scale = {
  small: {
    width: 40,
    height: 40,
    border: 6,
  },
  medium: {
    width: 60,
    height: 60,
    border: 10,
  },
  large: {
    width: 80,
    height: 80,
    border: 13,
  },
  big: {
    width: 100,
    height: 100,
    border: 16,
  },
};
export const spinner = styled.div<{
  scale: LoadingScale;
  speed: LoadingSpeed;
}>`
  display: inline-block;
  
  width: ${({ scale }) => Scale[scale].width}px;
  height: ${({ scale }) => Scale[scale].height}px;
  border-radius: 50%;

  border-left: ${({ scale }) => Scale[scale].border}px solid ${theme.color.blue600};
  border-right: ${({ scale }) => Scale[scale].border}px solid ${theme.color.blue600};
  border-top: ${({ scale }) => Scale[scale].border}px solid ${theme.color.blue600};
  border-bottom: ${({ scale }) => Scale[scale].border}px solid ${theme.color.blue200};

  animation: ${spinnerAnim} ${({ speed }) => Speed[speed]}s infinite linear;
`;
