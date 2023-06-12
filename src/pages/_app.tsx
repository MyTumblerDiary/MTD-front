import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useEffect } from 'react';

import GlobalStyle from '@/styles/GlobalStyle';

import { ApolloProvider } from '@apollo/client';
import { client } from '@/apollo/client';

import { RecoilRoot } from 'recoil';

import { ACCESS_TOKEN } from '@/utils/constants/localStorageKey';

import Layout from '@/components/Layout/Layout';
import ModalPortal from '@/components/Common/Modal/ModalPortal/ModalPortal';

import 'react-datepicker/dist/react-datepicker.css';
import '../components/Record/DatePicker/DatePicker.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

declare global {
  interface Window {
    kakao: any;
  }
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const getLayout =
    Component.getLayout || ((page: React.ReactNode) => <Layout>{page}</Layout>);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken && router.pathname === '/password-recovery') {
      return;
    }

    if (!accessToken && router.pathname === '/signup') {
      return;
    }

    if (!accessToken && router.pathname.indexOf('oauth') > -1) {
      return;
    }

    if (!accessToken && router.pathname.indexOf('existing-email') > -1) {
      return;
    }

    // Access Token이 없는 상태로 로그인이 아닌 다른 페이지에 접근할 경우 로그인페이지로 리다이렉트
    if (!accessToken && router.pathname !== '/login') {
      router.push('/login');
    }

    // Access Token이 있는 상태에서 로그인 페이지에 접근할 경우 메인페이지로 리다이렉트
    if (accessToken && router.pathname === '/login') {
      router.push('/');
    }
  }, [router]);

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        {getLayout(<Component {...pageProps} />)}
        <GlobalStyle />
        <ModalPortal />
      </ApolloProvider>
    </RecoilRoot>
  );
}
