import useModal from '@/hooks/useModal';

import Typography from '../../Typography/Typography';

import * as Style from './Withdrawal.style';

const Withdrawal = () => {
  const { closeModal } = useModal();

  const onClickWithdrawal = () => {
    console.log(`회원탈퇴를 해요. 
    1. api 호출 (아직 구현 안된듯)
    2. api 호출 정상적으로 되면 로컬스토리지에 있는 토큰 삭제
    3. 로그인 페이지로 라우팅
    `);
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
