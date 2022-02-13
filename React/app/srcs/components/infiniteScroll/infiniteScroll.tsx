import React, { useState, useEffect, useRef } from 'react'
import * as style from './style';
import { fetcher } from '../../utils'; 

const dummies = Array.from({ length: 100 }).map((e, i) => i + '');

const InfiniteScroll: React.FC = () => {
  const [ idx, setIdx ] = useState<number>(0);
  const [ datas, setDatas ] = useState<any[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);
  const ref = useRef<React.Ref>();
  const fetchData = async (idx: number) => {
    const { data } = await fetcher(dummies.slice(idx * 5, idx * 5 + 5));
    setDatas([ ...datas, ...data ]);
  }
  
  useEffect(() => { 
    const observer = new IntersectionObserver(
      ([ entry ]) => {
        if (entry.isIntersecting && !loading) setIdx(prev => prev + 1);
      }
    )
    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);
  useEffect(async () => {
    setLoading(true);
    await fetchData(idx);
    setLoading(false);
  }, [ idx ]);

  return (
    <style.div>
      {datas.map((e, i) => (
        <style.item key={`infscroll_${i}`} >{e}</style.item>
      ))}
      <style.trigger ref={ref} />
    </style.div>
  )
};

export default InfiniteScroll;
