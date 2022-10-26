import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Modal, { CloseType } from './modal';

export type ModalPortalProps = {
  children: ReactNode;
  id: string;
  closeModal?: (type: CloseType) => void;
  header?: string;
  onAction?: () => (void | Promise<void>);
  width?: number | string;
};
function modalPortal({
  children,
  id,
  closeModal = () => {},
  onAction = undefined,
  header = undefined,
  width = 480,
}: ModalPortalProps) {
  return createPortal(
    <Modal
      header={header}
      onAction={onAction}
      closeModal={closeModal}
      width={width}
    >
      {children}
    </Modal>,
    id ? document.getElementById(id) as HTMLElement : document.body,
  );
}

export default modalPortal;
