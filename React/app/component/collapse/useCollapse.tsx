import { useState } from 'react';
import * as S from './style';

type UseCollapseParams = {
  /**
   * collapse 초기 상태값
   * hidden과 show중에 하나
   * */
  init?: 'hidden' | 'show';
};
export const useCollapse = ({ init = 'hidden' }: UseCollapseParams) => {
  const collapseState = useState<S.CollapseOpenStyle>(init);
  const [open, setOpen] = collapseState;
  const toggleCollapse = () => {
    if (open === 'expanded'
      || open === 'expanding'
      || open === 'shrink'
      || open === 'show') return;

    if (open === 'hidden') setOpen('show');
    else if (open === 'display') setOpen('shrink');
  };

  return {
    collapseState, toggleCollapse,
  };
};
