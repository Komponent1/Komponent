import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import theme from '../../styles/theme';
import { LoadingScale, LoadingSpeed } from '../style.d';

const Scale = {
  small: `
    width: 4px;
    height: 4px;
    margin-right: 3px;
  `,
  medium: `
    width: 8px;
    height: 8px;
    margin-right: 6px;
  `,
  large: `
    width: 12px;
    height: 12px;
    margin-right: 8px;
  `,
  big: `
    width: 24px;
    height: 24px;
    margin-right: 16px;
  `,
};
const Speed = {
  slow: {
    time: 2.4,
    delay: 0.3,
  },
  medium: {
    time: 1.6,
    delay: 0.2,
  },
  fast: {
    time: 1.2,
    delay: 0.1,
  },
};

const dotAnim = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
`;

export const dots = styled.div`
  display: inline-flex;
`;
export const dot = styled.div<{
  speed: LoadingSpeed;
  scale: LoadingScale;
  nth: number;
}>`
  display: inline-block;
  border-radius: 50%;
  background: ${theme.color.primary};

  animation: ${dotAnim} ${({ speed }) => Speed[speed].time}s infinite ease-in-out;
  animation-delay: ${({ speed, nth }) => Speed[speed].delay * nth}s;
  ${({ scale }) => Scale[scale]};
`;
