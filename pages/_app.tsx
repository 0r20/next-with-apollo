import Head from 'next/head';
import nprogress from 'nprogress/nprogress.css';
import { SWRConfig } from 'swr';
import Router from 'next/router';
import NProgress from 'nprogress';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import axios from 'axios';
import App, { AppContext, AppProps } from 'next/app';

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 300,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: nprogress }} />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <>
        <GlobalStyle />
        <SWRConfig
          value={{
            // revalidateOnMount: true,
            revalidateOnFocus: false,
            // dedupingInterval: 5000,
            fetcher: (url: string) =>
              axios({
                url: url,
                baseURL: process.env.DB_HOST,
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Token token`,
                },
              }).then((r) => r.data),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </>
    </>
  );
};

MyApp.getInitialProps = async (AppContext: AppContext) => {
  const { Component } = AppContext;
  const appProps = Component.getInitialProps
    ? await App.getInitialProps(AppContext)
    : {};
  return {
    ...appProps,
  };
};

export default MyApp;

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
  }
  #__next {
    height: 100% !important;
    width: 100%;
    position: relative;
  }
  p {
    margin: 0;
  }
  html {
    box-sizing: border-box;
  }
  body {
    height: 100% !important; 
    width: 100%;
    overscroll-behavior: none;
    overflow-x: hidden;
    overflow-y: scroll;
    &.no-scroll {
      overflow-y: hidden;
    }
    &::-webkit-scrollbar {
        width: 5px;
        background-color: #f5f5f5;
        @media (max-width: 575.98px) {
            width: 0px;
        }
    }
    &::-webkit-scrollbar-track {
        height: 90%;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #000;
    }
  }
  #nprogress .bar {
    background: #000 !important;
  }
`;
