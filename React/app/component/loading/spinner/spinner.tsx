import React from 'react';
import { LoadingScale, LoadingSpeed } from '../style.d';
import * as S from './style';

export type DotsProps = {
  /** 크기 값 */
  scale?: LoadingScale;
  /** 속도 값 */
  speed?: LoadingSpeed;
};
function Spinner({
  scale = 'medium',
  speed = 'medium',
}: DotsProps) {
  return (
    <S.spinner scale={scale} speed={speed} />
  );
}
Spinner.defaultProps = {
  scale: 'medium',
  speed: 'medium',
};

export default Spinner;
