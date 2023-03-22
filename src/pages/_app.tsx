import type { AppProps } from 'next/app';
import { NextPage } from 'next';

import GlobalStyle from '@/styles/GlobalStyle';

import { ApolloProvider } from '@apollo/client';
import { client } from '@/apollo/client';

import { RecoilRoot } from 'recoil';

import Layout from '@/components/Layout/Layout';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout || ((page: React.ReactNode) => <Layout>{page}</Layout>);

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        {getLayout(<Component {...pageProps} />)}
        <GlobalStyle />
      </ApolloProvider>
    </RecoilRoot>
  );
}
