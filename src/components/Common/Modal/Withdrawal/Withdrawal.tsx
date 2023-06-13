import useModal from '@/hooks/useModal';
import useWithdrawal from '@/hooks/useWithdrawal';

import Typography from '../../Typography/Typography';

import * as Style from './Withdrawal.style';

const Withdrawal = () => {
  const { closeModal } = useModal();
  const [withdrawal] = useWithdrawal();

  const onClickWithdrawal = () => {
    withdrawal();
  };

  return (
    <Style.Container>
      <Style.ModalTitleContainer>
        <Typography size='button1'>정말로 탈퇴하실건가요?</Typography>
        <Typography size='body2'>
          탈퇴할 경우 모든 데이터는 삭제됩니다.
        </Typography>
      </Style.ModalTitleContainer>
      <Style.ButtonsContainer>
        <Style.Button onClick={onClickWithdrawal}>
          <Typography size='body2'>탈퇴하기</Typography>
        </Style.Button>
        <Style.Button onClick={closeModal}>
          <Typography size='body2'>취소</Typography>
        </Style.Button>
      </Style.ButtonsContainer>
    </Style.Container>
  );
};

export default Withdrawal;
