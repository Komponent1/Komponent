import React, {
  HTMLAttributes,
  ReactNode, useContext, useEffect, useState,
} from 'react';
import theme from '../../styles/theme';
import { LayoutContext } from '../layoutProvider';
import * as S from './style';

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  /** ReactNode */
  children: ReactNode;
  /** 헤더의 디자인 값 */
  design?: S.HedaerDesign;
  /** 헤더의 배경색깔 */
  color?: string;
};
function Header({
  children,
  design = 'top',
  color = 'white',
  ...args
}: HeaderProps) {
  const { hasHeader } = useContext(LayoutContext);
  const [margin, setMargin] = useState<number>(-theme.boxSize.headerHeight);
  const [opacity, setOpacity] = useState<number>(0);
  useEffect(() => {
    let lastScroll = 0;
    let direction = 1;
    let margined = -64;

    if (design === 'scroll') {
      const headScroll = () => {
        if (window.scrollY < theme.boxSize.headerHeight) {
          setOpacity(0);
        } else {
          // eslint-disable-next-line no-lonely-if
          if (lastScroll < window.scrollY) {
            margined -= (window.scrollY - lastScroll);
            setMargin(margined);
            direction = 1;
          } else { /** scroll up */
            if (direction === 1) {
              margined = -theme.boxSize.headerHeight;
              setMargin(margined);
            } else if (
              direction !== 1 && margined <= 0
            ) {
              margined += (lastScroll - window.scrollY);
              if (margined > 0) margined = 0;
              setMargin(margined);
            }
            setOpacity(1);
            direction = -1;
          }
        }
        lastScroll = window.scrollY;
      };
      window.addEventListener('scroll', headScroll);

      return () => window.removeEventListener('scroll', headScroll);
    }
    return undefined;
  }, [design]);

  return (
    <>
      <S.header
        className="srui-header"
        hasHeader={hasHeader}
        design={design === 'scroll' ? 'top' : design}
        color={color}
        {...args}
      >
        {children}
      </S.header>
      {design === 'scroll'
        ? (
          <S.header
            className="srui-scroll-header"
            opacity={opacity}
            hasHeader={hasHeader}
            design={design}
            margin={margin}
            color={color}
            {...args}
          >
            {children}
          </S.header>
        )
        : null}
    </>
  );
}
Header.defaultProps = {
  design: 'top',
  color: 'white',
};

export default Header;
