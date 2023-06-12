import { useRouter } from 'next/router';
import useModal from '@/hooks/useModal';

import { IS_SOCIAL_USER } from '@/utils/constants/localStorageKey';

import Header from '@/components/Common/Header/Header';
import Typography from '@/components/Common/Typography/Typography';
import Svg from '@/components/svg';

import * as Style from './AccountSetting.style';

const AccountSetting = () => {
  const router = useRouter();
  const { openModal } = useModal();

  const onClickChangePassword = () => {
    if (localStorage.getItem(IS_SOCIAL_USER) === 'Y') {
      openModal({
        modalName: 'confirm',
        props: {
          title: '소셜로 가입한 계정입니다.'
        }
      });

      return;
    }
    router.push('/mypage/account-setting/change-password');
  };

  const openLogoutModal = () => {
    openModal({ modalName: 'logout' });
  };

  const openWithdrawalModal = () => {
    openModal({ modalName: 'withdrawal' });
  };

  const ACCOUNT_SETTING_INFO = [
    {
      title: '비밀번호 수정',
      onClick: onClickChangePassword
    },
    {
      title: '로그아웃',
      onClick: openLogoutModal
    },
    {
      title: '회원 탈퇴',
      onClick: openWithdrawalModal
    }
  ];

  return (
    <div>
      <Header title='계정 설정' />
      <Style.MainContainer>
        {ACCOUNT_SETTING_INFO.map(({ title, onClick }) => {
          return (
            <Style.InfoElement
              key={`account setting ${title}`}
              onClick={onClick}
            >
              <Typography size='body1'>{title}</Typography>
              <Svg.ArrowLeft width={26} height={26} />
            </Style.InfoElement>
          );
        })}
      </Style.MainContainer>
    </div>
  );
};

export default AccountSetting;
