import PageHead from '@/components/Common/Head/Head';
import Layout from '@/components/Layout/Layout';
import AccountSetting from '@/components/Mypage/AccountSetting/AccountSetting';

export default function AccountSettingPage() {
  return (
    <div>
      <PageHead title='계정 설정' />
      <AccountSetting />
    </div>
  );
}

AccountSettingPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
