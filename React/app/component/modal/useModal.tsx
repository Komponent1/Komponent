/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactNode } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { renderPortal } from '../lib';
import Modal, { CloseType } from './modal';

export type UseModalReturn = {
  openModal: () => void;
  closeModal: (type: CloseType) => void;
};
export type ModalConfig = {
  header?: string;
  closeRequest?: () => void;
  onAction?: () => void
  width?: number | string,
};
export const useModal = (
  children: ReactNode,
  config: ModalConfig,
): UseModalReturn => {
  const closeModal = (type: CloseType) => {
    if (type === 'button' && config.closeRequest) {
      config.closeRequest();
    }
    const div = document.getElementById('srui-modal-root') as HTMLElement;
    unmountComponentAtNode(div);
    window.removeEventListener('keydown', closeWithESC);
  };
  const closeWithESC = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal('esc');
    }
  };
  const openModal = () => {
    renderPortal(
      'srui-modal-root',
      <Modal
        closeModal={closeModal}
        header={config.header}
        onAction={config.onAction}
        width={config.width}
      >
        {children}
      </Modal>,
    );
    window.addEventListener('keydown', closeWithESC);
  };

  return {
    openModal, closeModal,
  };
};
