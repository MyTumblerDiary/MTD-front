import Head from 'next/head';

export default function PageHead({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='viewport'
        content='initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width'
      />
    </Head>
  );
}
