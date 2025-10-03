import { useRef, useState } from "react";
import type { FC, ReactElement } from "react";
import { CSSTransition } from "react-transition-group";

import GlobalModalContext from "@/contexts/GlobalModalContext";

//constants
import { CODE_MESSAGE_IDENTIFIER, MESSAGES } from "@/constants/messages";

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

  const nodeRef = useRef<HTMLDivElement | null>(null);

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

  if (modalActionRef && modal) {
    modalActionRef.current = modalActions;
  }

  return (
    <CSSTransition
      in={modal.isOpen}
      timeout={200}
      classNames="fade"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className="global_modal_wrap">
        <div className="global_modal">
          <div className="global_modal_title">알림</div>
          <div className="global_modal_content">내용 테스트</div>
          <div className="global_modal_button" onClick={closeMessageModal}>
            확인
          </div>
        </div>
      </div>
    </CSSTransition>
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

  const nodeRef = useRef<HTMLDivElement | null>(null);

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
          className: "",
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
    <CSSTransition
      in={modal.isOpen}
      timeout={200}
      classNames="fade"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className="global_modal_wrap">
        <div className="global_modal">
          <strong className="global_modal_title">알림</strong>
          <div className="global_modal_content">내용 테스트</div>
          <div className="global_modal_button" onClick={closeModal}>
            확인
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

const GlobalModalWrapper: FC<GlobalModalWrapperProps> = ({
  children,
}: GlobalModalWrapperProps) => {
  const globalModalActionsRef = useRef<GlobalModalActions | null>(null);
  const messageModalActionRef = useRef<MessageModalActions | null>(null);

  const openMessage = (messageIdentifier: string) => {
    messageModalActionRef.current?.openMessageModal(messageIdentifier);
  };

  const closeMessage = () => {
    messageModalActionRef.current?.closeMessageModal();
  };

  const openModal = (props: ModalDataOnOpen) =>
    globalModalActionsRef.current?.openModal(props);
  const closeModal = () => globalModalActionsRef.current?.closeModal();

  return (
    <GlobalModalContext.Provider
      value={{
        openMessage,
        closeMessage,
        openModal,
        closeModal,
      }}
    >
      {children}
      <MessageModal modalActionRef={messageModalActionRef} />
      <GlobalModal modalActionRef={globalModalActionsRef} />
    </GlobalModalContext.Provider>
  );
};

export default GlobalModalWrapper;
