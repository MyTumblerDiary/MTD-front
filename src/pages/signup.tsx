import Layout from '@/components/Layout/Layout';
import SignupForm from '@/components/Signup/SignupForm';

export default function Signup() {
  return <SignupForm />;
}

Signup.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
