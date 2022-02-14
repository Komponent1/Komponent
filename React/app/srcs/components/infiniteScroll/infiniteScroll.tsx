import React, { useState, useEffect, useRef } from 'react'
import * as style from './style';

const InfiniteScroll: React.FC = ({ fetcher }: { fetcher: Function }) => {
  const [ idx, setIdx ] = useState<number>(0);
  const [ datas, setDatas ] = useState<any[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);
  const ref = useRef<React.Ref>();
  const fetchData = async (idx: number) => {
    const { data } = await fetcher(idx);
    setDatas(prev => [...prev, ...data]);
  }
  
  useEffect(() => { 
    const observer = new IntersectionObserver(
      ([ entry ]) => {
        if (entry.isIntersecting && !loading) {
          setLoading(true);
          setIdx(idx + 1);
        }
      }
    )
    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);
  useEffect(async () => {
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
