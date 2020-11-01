import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';

export default function Layout(props) {
  const location = useLocation();
  return (
    <>
      <Head>
        <meta
          property="my-custom-property"
          content={'my location value'}
        />
      </Head>
      <OriginalLayout {...props} />
    </>
  );
}
