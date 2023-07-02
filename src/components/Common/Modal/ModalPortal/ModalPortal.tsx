import { createPortal } from 'react-dom';
import { useReactiveVar } from '@apollo/client';

import { activeModalNameVar, modalProps } from '@/store/modal';

import useModal from '@/hooks/useModal';

import Logout from '../Logout/Logout';
import Withdrawal from '../Withdrawal/Withdrawal';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

import * as Style from './ModalPortal.style';

type ModalComponentType = {
  [key: string]: (props?: any) => JSX.Element;
};

const MODAL_COMPONENTS: ModalComponentType = {
  logout: Logout,
  withdrawal: Withdrawal,
  confirm: ConfirmModal
};

const ModalPortal = () => {
  const { closeModal } = useModal();
  const activeModalName = useReactiveVar(activeModalNameVar);
  const modalPropsValue = useReactiveVar(modalProps);

  const selectedElement =
    typeof window !== 'undefined' &&
    (document.getElementById('portal-root') as HTMLElement);

  if (selectedElement === null || activeModalName === '') {
    return <div></div>;
  }

  const Modal = MODAL_COMPONENTS[activeModalName];

  return selectedElement
    ? createPortal(
        <Style.Backdrop onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <Modal {...modalPropsValue} />
          </div>
        </Style.Backdrop>,
        selectedElement
      )
    : null;
};

export default ModalPortal;
