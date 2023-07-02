export interface ModalPropsType {
  title?: string;
  onClickFn?: any;
}

export interface OpenModalProps {
  modalName: string;
  props?: ModalPropsType;
}
