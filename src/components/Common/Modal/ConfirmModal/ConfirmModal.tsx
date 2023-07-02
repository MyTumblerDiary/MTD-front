// 확인 버튼 하나만 있는 범용 모달

import useModal from '@/hooks/useModal';

import Typography from '../../Typography/Typography';

import { ModalPropsType } from '@/types/modal.type';

import * as Style from './ConfirmModal.style';

const ConfirmModal = (props: ModalPropsType) => {
  const { closeModal } = useModal();
  const { title, onClickFn } = props;

  const onClickConfirmHandler = () => {
    if (onClickFn) {
      onClickFn();
    }
    closeModal();
  };

  return (
    <Style.Container>
      <Style.ModalTitleContainer>
        <Typography size='button1'>{title}</Typography>
      </Style.ModalTitleContainer>

      <Style.Button onClick={onClickConfirmHandler}>
        <Typography size='body2'>확인</Typography>
      </Style.Button>
    </Style.Container>
  );
};

export default ConfirmModal;
