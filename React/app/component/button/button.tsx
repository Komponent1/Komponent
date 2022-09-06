import * as React from 'react';
import * as style from './style';

export type ButtonProps = {
  /** 버튼 사용 여부 */
  disabled?: boolean;
};

function Button({ disabled }: ButtonProps) {
  return (
    <style.button disabled={disabled} />
  );
}
Button.defaultProps = {
  disabled: false,
};

export default Button;
