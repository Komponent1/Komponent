import React, { HTMLAttributes } from 'react';
import * as S from './style';

export type BookmarkProps = HTMLAttributes<HTMLDivElement> & {
  /** 사이트 이름, og:title */
  title: string;
  /** 이동 사이트 url og:url */
  url: string;
  /** domain 이미지 src, og:image */
  img?: string;
  description?: string;
  /** 페이지 이동 함수, 기본은 window.location.href를 이용합니다 */
  route?: (url: string) => void;
};
function Bookmark({
  title,
  url,
  img = '',
  description = undefined,
  route = (loc: string) => { window.location.href = loc; },
  ...args
}: BookmarkProps) {
  return (
    <S.bookmark
      className="srui-bookmark"
      onClick={() => route(url)}
      {...args}
    >
      <S.images src={img} alt="" />
      <S.information>
        <S.title>{title}</S.title>
        <S.description>{url}</S.description>
        <S.description>{description}</S.description>

      </S.information>
    </S.bookmark>
  );
}
Bookmark.defaultProps = {
  img: '',
  description: undefined,
  route: (loc: string) => { window.location.href = loc; },
};

export default Bookmark;
