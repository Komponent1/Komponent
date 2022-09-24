import React, { ReactNode, useEffect, useRef } from 'react';
import * as S from './style';

export type CollapseProps = {
  /** collapse 요소 */
  children: ReactNode,
};
function Collapse({ children }: CollapseProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {}, [ref.current]);

  return (
    <S.div ref={ref}>
      {children}
    </S.div>
  );
}

export default Collapse;
