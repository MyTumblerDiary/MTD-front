import useModal from '@/hooks/useModal';

import Typography from '../../Typography/Typography';

import * as Style from './Logout.style';

const Logout = () => {
  const { closeModal } = useModal();

  const onClickLogout = () => {
    console.log(`로그아웃을 해요. 
    1. api 호출 (api 수정중이라 query일지 mutation일지 모르겠음)
    2. api 호출 정상적으로 되면 로컬스토리지에 있는 토큰 삭제
    3. 로그인 페이지로 라우팅
    `);
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
