import React, { HTMLAttributes, useEffect, useState } from 'react';
import Bookmark from './bookmark';
import { Spinner } from '../loading';

type TableProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  url: string;
  description: string;
  img: string;
};
type OgBookmarkProps = {
  /** 테이블 값 반환 프로미스, title, url, description, img는 반드시 포함되어야합니다 */
  requestPromise: () => Promise<TableProps>
  /** 제공받는 og:title이 없을 시 표기 이름 */
  originTitle: string;
  /** 제공받는 og:url이 없을 시 이동 url */
  originUrl: string;
  /** 페이지 이동 함수, default는 window.location.href를 이용합니다 */
  route?: (url: string) => void;
};
function OgBookmark({
  requestPromise,
  originTitle,
  originUrl,
  route = (loc: string) => { window.location.href = loc; },
  ...args
}: OgBookmarkProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [table, setTable] = useState<TableProps | undefined>(undefined);

  useEffect(() => {
    requestPromise().then(({
      title, url, description, img,
    }) => {
      setTable({
        title, url, description, img,
      });
    }).catch(() => setTable({
      title: originTitle, url: originUrl, img: '', description: originTitle,
    }));
  }, [requestPromise]);
  useEffect(() => {
    if (table) setLoading(false);
  }, [table]);

  if (loading) return (<Spinner />);
  return (
    <Bookmark
      title={table?.title || ''}
      description={table?.description || undefined}
      img={table?.img || ''}
      url={table?.url || originUrl}
      route={route}
      {...args}
    />
  );
}
OgBookmark.defaultProps = {
  route: (loc: string) => { window.location.href = loc; },
};

export default OgBookmark;
