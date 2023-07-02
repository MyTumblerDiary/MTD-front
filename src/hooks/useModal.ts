import { activeModalNameVar, modalProps } from '@/store/modal';

import { OpenModalProps } from '@/types/modal.type';

const useModal = () => {
  const openModal = ({ modalName, props }: OpenModalProps) => {
    activeModalNameVar(modalName);
    modalProps(props);
  };

  const closeModal = () => {
    activeModalNameVar('');
    modalProps({});
  };

  return { openModal, closeModal };
};

export default useModal;
