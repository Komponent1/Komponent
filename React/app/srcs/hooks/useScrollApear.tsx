import { useEffect, useRef } from 'react';
import { throttle } from '../utils';
/*
  이 hook은 스크롤시 오브젝트가 상단으로 사라지는 동작을 진행하는 훅이다.
  scrollTop은 사라지는 기준 높이이고
  eventDelay는 throttle을 동작시키는 딜레이이고
  disappearPosition은 오브젝트가 상단으로 올라가는 높이이다.
*/
const useScrollAppear = (scrollTop: number, eventDelay: number, disapearPosition: string): React.Ref => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const scrollingEvent = () => {
      if (scrollY < scrollTop) ref.current.style.top = '0';
      else ref.current.style.top = disapearPosition;
    };
    window.addEventListener("scroll", throttle(scrollingEvent, eventDelay));

    return () => window.removeEventListener("scroll", throttle(scrollingEvent, eventDelay));
  }, []);

  return ref;
}

export default useScrollAppear;
