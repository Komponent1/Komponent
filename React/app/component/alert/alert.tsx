import React, { HTMLAttributes } from 'react';
import { ExclamationCircle } from 'react-bootstrap-icons';
import * as S from './style';

export type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> & {
  /** 경고창의 타입(디자인) */
  type?: S.AlertType;
  /** 경고창 크기 */
  scale?: S.AlertScale;
  /** 경고창 문구 */
  comment: string;
  /** 경고창 번호(경고창의 번호는 unique함을 권장합니다) */
  id: number;
};
function Alert({
  type = 'danger',
  scale = 'medium',
  comment,
  id,
  ...args
}: AlertProps) {
  return (
    <S.alert
      className={`srui-alert_${id}`}
      scale={scale}
      type={type}
      {...args}
    >
      <ExclamationCircle />
      {comment}
    </S.alert>
  );
}
Alert.defaultProps = {
  type: 'danger',
  scale: 'medium',
};

export default Alert;
