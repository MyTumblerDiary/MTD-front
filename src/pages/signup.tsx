import Layout from '../components/Layout/Layout';

export default function Signup() {
  return <div>회원가입</div>;
}

Signup.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
