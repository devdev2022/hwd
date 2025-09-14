import { createContext } from "react";
import type {
  ErrorMessage,
  ModalDataOnOpen,
} from "../components/modals/GlobalModal";

interface GlobalModalContextProps {
  openMessage: (messageIdentifier: string) => void;
  closeMessage: () => void;
  openModal: (props: ModalDataOnOpen) => void;
  closeModal: () => void;
  showErrorMessage: (message: string, error: ErrorMessage) => void;
}

const GlobalModalContext = createContext<GlobalModalContextProps>({
  openMessage: (messageIdentifier: string) => {},
  closeMessage: () => {},
  openModal: (props: ModalDataOnOpen) => {},
  closeModal: () => {},
  showErrorMessage: (message: string, error: ErrorMessage) => {},
});

export default GlobalModalContext;
