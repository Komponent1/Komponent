import React, { MouseEventHandler, ReactNode } from 'react';
import * as S from './style';
import { Button } from '..';

export type CloseType = 'button' | 'outside' | 'esc' | 'confirm';
export type ModalProps = {
  children: ReactNode;
  closeModal: (type: CloseType) => void;
  header?: string;
  onAction?: () => (void | Promise<void>);
  width?: string | number;
};
function Modal({
  header = undefined,
  onAction = undefined,
  width = 480,
  closeModal,
  children,
}: ModalProps) {
  const closeOutSide: MouseEventHandler<HTMLElement> = (e) => {
    if (!(e.target as HTMLElement).closest('.srui-modal')) {
      closeModal('outside');
    }
  };
  const confirm = async () => {
    if (onAction) await onAction();
    closeModal('confirm');
  };

  return (
    <S.modalBackground
      className="srui-modal-background"
      onClick={closeOutSide}
    >
      <S.modal
        className="srui-modal"
        width={width}
      >
        {header
          ? <S.modalHeader>{header}</S.modalHeader>
          : null}
        <S.modalContent>
          {children}
        </S.modalContent>
        <S.modalAction>
          <Button onClick={confirm}>확인</Button>
          <Button onClick={() => closeModal('button')}>닫기</Button>
        </S.modalAction>
      </S.modal>
    </S.modalBackground>
  );
}
Modal.defaultProps = {
  header: undefined,
  onAction: undefined,
  width: 480,
};

export default Modal;
