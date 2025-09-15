import { useRef, useState, useEffect } from "react";
import type { FC, ReactElement } from "react";
import cx from "classnames";

import GlobalModalContext from "../../contexts/GlobalModalContext";

//constants
import { CODE_MESSAGE_IDENTIFIER, MESSAGES } from "../../constants/messages";
import { ERROR_MESSAGE } from "../../constants/errorCode";

//assets
import CloseIcon from "../../assets/close.svg?react";

/*************************************************************************************************/

//MessageModal
interface MessageModalProps {
  modalActionRef: React.RefObject<MessageModalActions | null>;
}

interface MessageModalActions {
  openMessageModal: (messageCode: string) => void;
  closeMessageModal: () => void;
}

interface MessageModalData {
  isOpen: boolean;
  message: string;
}

//globalModal
interface GlobalModalProps {
  modalActionRef: React.RefObject<GlobalModalActions | null>;
}

interface GlobalModalActions {
  openModal: (props: ModalDataOnOpen) => void;
  closeModal: () => void;
}

export interface ModalBody {
  body: ReactElement | null;
}
export interface ModalDataOnOpen extends ModalBody {
  className?: string;
}

interface ModalData extends ModalDataOnOpen {
  isOpen: boolean;
}

//etc
interface GlobalModalWrapperProps {
  children: React.ReactNode;
}

export interface ErrorMessage {
  message: string;
}

interface GlobalModalActions {
  openModal: (props: ModalDataOnOpen) => void;
  closeModal: () => void;
}

interface MessageModalActions {
  openMessageModal: (props: string) => void;
  closeMessageModal: () => void;
}

const MessageModal: FC<MessageModalProps> = ({
  modalActionRef,
}: MessageModalProps) => {
  const [modal, setModal] = useState<MessageModalData>({
    isOpen: false,
    message: "",
  });

  const modalStateRef = useRef(modal);

  const openMessageModal = (messageCode: string) => {
    const messageContent = CODE_MESSAGE_IDENTIFIER[messageCode];
    const message = messageContent
      ? MESSAGES[messageContent]
      : MESSAGES[messageCode]
      ? MESSAGES[messageCode]
      : messageCode;

    setModal((preModal) => {
      if (message && !preModal.isOpen) {
        return {
          isOpen: true,
          message,
        };
      } else {
        return {
          ...preModal,
        };
      }
    });
  };

  const closeMessageModal = () => {
    setModal((preModal) => {
      if (preModal.isOpen) {
        return {
          isOpen: false,
          message: "",
        };
      } else {
        return {
          ...preModal,
        };
      }
    });
  };

  const modalActions = {
    openMessageModal,
    closeMessageModal,
  };

  if (modalActionRef && modalStateRef) {
    modalActionRef.current = modalActions;
  }

  useEffect(() => {
    modalStateRef.current = modal;
  }, [modal]);

  return (
    <div
      className={cx("bottom_sheet_wrap", { is_open: modal.isOpen })}
      onClick={closeMessageModal}
    >
      <div className="bottom_sheet_inner">
        <strong className="title">알림</strong>
        <div className="bottom_sheet_content">내용 테스트</div>
        <button className={cx("btn")} onClick={closeMessageModal}>
          확인
        </button>
      </div>
    </div>
  );
};

const GlobalModal: FC<GlobalModalProps> = ({
  modalActionRef,
}: GlobalModalProps) => {
  const [modal, setModal] = useState<ModalData>({
    isOpen: false,
    body: null,
    className: "",
  });

  const openModal = (props: ModalDataOnOpen) => {
    setModal((prevModal) => {
      if (!prevModal.isOpen) {
        return {
          isOpen: true,
          ...props,
        };
      }
      return {
        ...prevModal,
      };
    });
  };

  const closeModal = () => {
    setModal((prevModal) => {
      if (prevModal.isOpen) {
        return {
          isOpen: false,
          body: null,
          dialogClassName: "",
        };
      }
      return {
        ...prevModal,
      };
    });
  };

  const modalActions = {
    openModal,
    closeModal,
  };

  if (modalActionRef && modalActions) {
    modalActionRef.current = modalActions;
  }
  return (
    <>
      <div className="modal-backdrop">
        <div className={`modal-container ${modal.className}`}>
          <button
            className="modal-close"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
          <div className="modal-body">{modal.body}</div>
        </div>
      </div>
    </>
  );
};

const GlobalModalWrapper: FC<GlobalModalWrapperProps> = ({
  children,
}: GlobalModalWrapperProps) => {
  const globalModalActionsRef = useRef<GlobalModalActions | null>(null);
  const messageModalActionRef = useRef<MessageModalActions | null>(null);

  const openMessage = (messageIdentifier: string) => {
    if (messageModalActionRef?.current?.openMessageModal) {
      messageModalActionRef.current.openMessageModal(messageIdentifier);
    }
  };

  const closeMessage = () => {
    if (messageModalActionRef?.current?.closeMessageModal) {
      messageModalActionRef.current.closeMessageModal();
    }
  };

  const openModal = (props: ModalDataOnOpen) =>
    globalModalActionsRef.current?.openModal(props);
  const closeModal = () => globalModalActionsRef.current?.closeModal();

  const showErrorMessage = (message: string, error: ErrorMessage) => {
    console.log("showErrorMessage error = ", error);
    if (error.message === ERROR_MESSAGE.ServerConnectionError) {
      openMessage("serverConnectionFail");
    }
    if (messageModalActionRef?.current?.openMessageModal) {
      messageModalActionRef.current.openMessageModal(message);
    }
  };

  return (
    <GlobalModalContext.Provider
      value={{
        openMessage,
        closeMessage,
        openModal,
        closeModal,
        showErrorMessage,
      }}
    >
      {children}
      <MessageModal modalActionRef={messageModalActionRef} />
      <GlobalModal modalActionRef={globalModalActionsRef} />
    </GlobalModalContext.Provider>
  );
};

export default GlobalModalWrapper;
