import PageHead from '@/components/Common/Head/Head';
import Layout from '@/components/Layout/Layout';
import ChangeNickname from '@/components/Mypage/ChangeNickname/ChangeNickname';

export default function ChangeNicknamePage() {
  return (
    <div>
      <PageHead title='닉네임 변경' />
      <ChangeNickname />
    </div>
  );
}

ChangeNicknamePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
