import PageHead from '@/components/Common/Head/Head';
import Layout from '@/components/Layout/Layout';
import DiscountReport from '@/components/Mypage/DiscountReport/DiscountReport';

export default function DiscountReportPage() {
  return (
    <div>
      <PageHead title='할인 내역 보기' />
      <DiscountReport />
    </div>
  );
}

DiscountReportPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
