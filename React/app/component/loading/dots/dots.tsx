import React from 'react';
import { LoadingScale, LoadingSpeed } from '../style.d';
import * as S from './style';

export type DotsProps = {
  /** 크기값 */
  scale?: LoadingScale;
  /** 속도값 */
  speed?: LoadingSpeed;
};

function Dots({
  scale = 'medium',
  speed = 'medium',
}: DotsProps) {
  return (
    <S.dots>
      <S.dot scale={scale} speed={speed} nth={0} />
      <S.dot scale={scale} speed={speed} nth={1} />
      <S.dot scale={scale} speed={speed} nth={2} />
    </S.dots>
  );
}
Dots.defaultProps = {
  scale: 'medium',
  speed: 'medium',
};

export default Dots;
