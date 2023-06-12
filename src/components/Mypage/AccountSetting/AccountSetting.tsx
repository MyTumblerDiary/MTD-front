import { useRouter } from 'next/router';

import activeModalNameVar from '@/store/modal';

import Header from '@/components/Common/Header/Header';
import Typography from '@/components/Common/Typography/Typography';
import Svg from '@/components/svg';

import * as Style from './AccountSetting.style';

const AccountSetting = () => {
  const router = useRouter();

  const onClickChangePassword = () => {
    router.push('/mypage/account-setting/change-password');
  };

  const openLogoutModal = () => {
    activeModalNameVar('logout');
  };

  const openWithdrawalModal = () => {
    activeModalNameVar('withdrawal');
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