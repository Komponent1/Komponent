import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  TransitionEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './style';

export type CollapseContentProps = {
  /** useCollapse로 생성한 state */
  collapseState: [S.CollapseOpenStyle, Dispatch<SetStateAction<S.CollapseOpenStyle>>];
  /** collapse content element */
  children: ReactNode;
};
function CollapseContent({
  collapseState,
  children,
}: CollapseContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = collapseState;
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    if (height === 0 && ref.current && open === 'show') {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref.current]);
  useEffect(() => {
    if (open === 'expanded') setOpen('display');
    else if (open === 'expanding') setOpen('expanded');
    else if (open === 'show') setOpen('expanding');
  }, [open]);

  const onTransitionEnd: TransitionEventHandler<HTMLDivElement> = () => {
    if (open === 'shrink') setOpen('hidden');
  };

  return (
    <S.content
      open={open}
      onTransitionEnd={onTransitionEnd}
      height={height}
      ref={ref}
    >
      {children}
    </S.content>
  );
}
export default CollapseContent;
