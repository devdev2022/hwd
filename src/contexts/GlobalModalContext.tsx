import { createContext } from "react";
import type { ModalDataOnOpen } from "../components/modals/GlobalModal";

interface GlobalModalContextProps {
  openMessage: (messageIdentifier: string) => void;
  closeMessage: () => void;
  openModal: (props: ModalDataOnOpen) => void;
  closeModal: () => void;
}

const GlobalModalContext = createContext<GlobalModalContextProps>({
  openMessage: (messageIdentifier: string) => {},
  closeMessage: () => {},
  openModal: (props: ModalDataOnOpen) => {},
  closeModal: () => {},
});

export default GlobalModalContext;
