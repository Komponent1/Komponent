/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactNode } from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import Modal, { CloseType } from './modal';

export type UseModalReturn = {
  openModal: () => void;
  closeModal: (type: CloseType) => void;
};
export type ModalConfig = {
  header?: string;
  closeRequest?: () => void;
  onAction?: () => void
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
    let div = document.getElementById('srui-modal-root');
    if (!div) {
      div = document.createElement('div');
      div.id = 'srui-modal-root';
      document.body.appendChild(div);
    }
    window.addEventListener('keydown', closeWithESC);

    ReactDOM.render(
      (
        <Modal
          closeModal={closeModal}
          header={config.header}
          onAction={config.onAction}
        >
          {children}
        </Modal>
      ),
      div,
    );
  };

  return {
    openModal, closeModal,
  };
};
