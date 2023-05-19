import Head from 'next/head';

export default function PageHead({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        http-equiv='Content-Security-Policy'
        content='upgrade-insecure-requests'
      />
      <meta
        name='viewport'
        content='initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width'
      />
    </Head>
  );
}
