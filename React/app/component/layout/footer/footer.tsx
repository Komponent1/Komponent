import React, { ReactNode, useContext } from 'react';
import theme from '../../styles/theme';
import { LayoutContext } from '../layoutProvider';
import * as S from './style';

export type FooterProps = {
  children: ReactNode;
  color?: string;
};
function Footer({
  children = undefined,
  color = theme.color.white300,
}: FooterProps) {
  const { hasFooter } = useContext(LayoutContext);

  return (
    <S.footer
      className="srui-footer"
      color={color}
      hasFooter={hasFooter}
    >
      {children}
    </S.footer>
  );
}
Footer.defaultProps = {
  color: theme.color.white300,
};

export default Footer;
