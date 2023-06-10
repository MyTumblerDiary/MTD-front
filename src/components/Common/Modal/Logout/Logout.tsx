import useModal from '@/hooks/useModal';
import useLogout from '@/hooks/useLogout';

import Typography from '../../Typography/Typography';

import * as Style from './Logout.style';

const Logout = () => {
  const { closeModal } = useModal();
  const [logout] = useLogout();

  const onClickLogout = () => {
    logout();
  };

  return (
    <Style.Container>
      <Style.ModalTitleContainer>
        <Typography size='button1'>로그아웃 하실건가요?</Typography>
      </Style.ModalTitleContainer>
      <Style.ButtonsContainer>
        <Style.Button onClick={closeModal}>
          <Typography size='body2'>취소</Typography>
        </Style.Button>
        <Style.Button onClick={onClickLogout}>
          <Typography size='body2'>로그아웃</Typography>
        </Style.Button>
      </Style.ButtonsContainer>
    </Style.Container>
  );
};

export default Logout;
