import { createPortal } from 'react-dom';
import { useReactiveVar } from '@apollo/client';

import activeModalNameVar from '@/store/modal';

import useModal from '@/hooks/useModal';

import Logout from '../Logout/Logout';
import Withdrawal from '../Withdrawal/Withdrawal';

import * as Style from './ModalPortal.style';

type ModalComponentType = {
  [key: string]: () => JSX.Element;
};

const MODAL_COMPONENTS: ModalComponentType = {
  logout: Logout,
  withdrawal: Withdrawal
};

const ModalPortal = () => {
  const { closeModal } = useModal();
  const activeModalName = useReactiveVar(activeModalNameVar);

  const selectedElement = document.getElementById('portal-root') as HTMLElement;
  if (selectedElement === null || activeModalName === '') {
    return <div></div>;
  }

  const Modal = MODAL_COMPONENTS[activeModalName];

  return createPortal(
    <Style.Backdrop onClick={closeModal}>
      <div onClick={(e) => e.stopPropagation()}>
        <Modal />
      </div>
    </Style.Backdrop>,
    selectedElement
  );
};

export default ModalPortal;
