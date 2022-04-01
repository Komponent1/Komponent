import React, { useState, useEffect, useRef } from 'react'
import * as style from './style';

type Prop = {
  fetcher: (idx: number) => Promise<{ data: any[] }>
}
const InfiniteScroll: React.FC = ({ fetcher }: Prop) => {
  const [ idx, setIdx ] = useState<number>(-1);
  const [ datas, setDatas ] = useState<any[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ display, setDisplay ] = useState<boolean>(true);
  const ref = useRef<React.Ref>(null);
  const fetchData = async (idx: number) => {
    const { data } = await fetcher(idx);
    console.log('fetch', loading, idx, datas, data);
    setDatas(prev => [...prev, ...data]);
  }
  
  useEffect(() => { 
    const observer = new IntersectionObserver(
      ([ entry ]) => {
        if (entry.isIntersecting || !loading) {
          setDisplay(false);
        }
      }
    )
    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);
  useEffect(() => {
    if (display) return;
    setLoading(true);
  }, [ display ]);
  useEffect(() => {
    if (!loading) setDisplay(true);
    else setIdx(prev => prev + 1);
  }, [ loading ])
  useEffect(async () => {
    if (!loading) return;
    await fetchData(idx);
  }, [ idx ]);
  useEffect(() => {
    setLoading(false);
  }, [ datas ])

  return (
    <style.div className='kui_infinitescroll'>
      {datas.map((e, i) => (
        <style.item className='kui_infinitescroll_li'
          key={`infscroll_${i}`} >
          {e}
        </style.item>
      ))}
      <style.trigger className='kui_infinitescroll_trigger' ref={ref} show={display}/>
    </style.div>
  )
};

export default InfiniteScroll;
