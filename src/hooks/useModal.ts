import activeModalNameVar from '@/store/modal';

interface OpenModalProps {
  modalName: string;
}

const useModal = () => {
  const openModal = ({ modalName }: OpenModalProps) => {
    activeModalNameVar(modalName);
  };

  const closeModal = () => {
    activeModalNameVar('');
  };

  return { openModal, closeModal };
};

export default useModal;
