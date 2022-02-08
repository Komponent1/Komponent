import React, { useState, useEffect } from 'react';
import { fetcher } from '../../utlls';
import * as style from './style';

const Loading: React.FC = () => (
  <div>Loading</div>
);

const dummies = Array.from({ length: 3 }).map((_, i) => ({
  title: `${i}`,
  content: `This is ${i}`
}));

const Tab: React.FC = () => {
  const [ datas, setDatas ] = useState<any[]>([]);
  const [ idx, setIdx ] = useState<number>(0);
  const [ loading, setLoading ] = useState<boolean>(false);

  const fetchData = async () => {
    const { data } = await fetcher(dummies);
    setDatas(data);
  }

  useEffect(async () => {
    setLoading(true);
    await fetchData();
    setLoading(false);
  }, []);

  if (loading || datas.length === 0) return <Loading />;
  return (
    <style.div>
      <style.nav>
        {datas.map(({ title }, i) => (
          <style.navitem
            num={datas.length}
            select={i === idx}
            onClick={() => setIdx(i)}>
            {title}
          </style.navitem>
        ))}
      </style.nav>
      <style.item>
        {datas[idx].content}
      </style.item>
    </style.div>
  )
};

export default Tab;
