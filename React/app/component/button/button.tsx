import * as React from 'react';
import * as S from './style';

export type ButtonProps = {
  /** 클릭 이벤트 핸들러 */
  onClick?: (event?: React.MouseEvent) => void;
  /** 버튼 사용 여부 */
  disabled?: boolean;
  /** 버튼 크기 */
  size?: S.ButtonSize;
  /** 버튼 코너 스타일 */
  corner?: S.ButtonCorner;
  /** 버튼 타입 */
  color?: S.ButtonColor;
  /** 버튼 디자인 */
  design?: S.ButtonDesign;
  /** children */
  children?: React.ReactNode
};

function Button({
  onClick, disabled, size, corner, color, design, children,
}: ButtonProps) {
  return (
    <S.button
      className="srui-button"
      onClick={onClick}
      disabled={disabled}
      size={size}
      corner={corner}
      color={color}
      design={design}
    >
      {children}
    </S.button>
  );
}
Button.defaultProps = {
  disabled: false,
  size: 'medium',
  corner: 'square',
  color: 'normal',
  design: 'block',
  onClick: () => {},
  children: 'button',
};

export default Button;
