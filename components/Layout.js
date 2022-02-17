import React, {Fragment} from 'react';
import Head from 'next/head'
import Sidebar from './Sidebar';
import ExtraSidebar from './ExtraSidebar';


export const Layout = () => {
  return (
    <Fragment>
      <Head>
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'></link>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"></link>
      </Head>
    </Fragment>
    )
}
