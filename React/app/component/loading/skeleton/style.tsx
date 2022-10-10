import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export type SekeletonType = 'box' | 'text' | 'avatar';
const skeletonAnim = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;
export const skelectonBackground = styled.div<{
  width: number | string;
  height: number | string;
}>`
  background: rgba(0, 0, 0, 0.11);
  overflow: hidden;

  width: ${({ width }) => (typeof (width) === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof (height) === 'number' ? `${height}px` : height)};

  &:after {
    display: block;
    content: "";

    width: 100%;
    height: 100%;

    animation: ${skeletonAnim} 1.6s linear 0.5s infinite;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent);
    transform: translateX(-100%);
  };
`;
export const skeletonText = styled(skelectonBackground)`
  border-radius: 4px;
`;
export const skeletonAvatar = styled(skelectonBackground)`
  border-radius: 50%;
`;
export const skeletonBox = styled(skelectonBackground)`

`;
