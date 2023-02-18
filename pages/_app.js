import MainLayout from "@/layout/MainLayout";
import { selectTheme } from "@/store/slices/themeSlice";
import { wrapper } from "@/store/store";
import "@/styles/globals.css";
import { OG_TITLE, SITE_BASE_URL, SITE_NAME } from "@/utils/constants";
import { getTheme } from "@/utils/utils";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import "@fontsource/roboto";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Cookies from "js-cookie";
import { DefaultSeo } from "next-seo";
import dynamic from "next/dynamic";
import Head from "next/head";
import Router from "next/router";
import React from "react";
import { Provider, useSelector } from "react-redux";

const FullScreenLoader = dynamic(
  () => import("@/components/loader/FullScreenLoader"),
  { ssr: false }
);

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  const [loading, setLoading] = React.useState(false);
  const themeStore = useSelector(selectTheme);
  console.log(themeStore);

  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  // React.useEffect(() => {
  //   const data = Cookies.get("theme");
  //   if (data !== undefined) {
  //     dispatch(setTheme(data));
  //   }
  // }, []);

  React.useEffect(() => {
    Cookies.set("theme", themeStore, {
      secure: true,
      expires: 365,
    });
  }, [themeStore]);

  return (
    <CacheProvider value={cache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          key="viewport"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link
          rel="icon"
          type="image/png"
          sizes="250x181"
          href="/img/logo-white-250px.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="250x181"
          href="/img/logo-black-250px.png"
        />
      </Head>
      <DefaultSeo
        title={SITE_NAME}
        canonical={SITE_BASE_URL}
        description={"Your nice & cozy video games platform"}
        openGraph={{
          type: "website",
          siteName: SITE_NAME,
          title: OG_TITLE,
          url: SITE_BASE_URL,
          images: [
            {
              url: `${SITE_BASE_URL}img/GameFluence-black-2000px.png`,
              width: 1200,
              height: 503,
              alt: `${SITE_NAME} black logo`,
              type: "image/png",
            },
            {
              url: `${SITE_BASE_URL}img/GameFluence-white-2000px.png`,
              width: 1200,
              height: 503,
              alt: `${SITE_NAME} white logo`,
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Provider store={store}>
        <ThemeProvider theme={getTheme(themeStore).theme}>
          <CssBaseline />
          <MainLayout>
            {loading ? <FullScreenLoader /> : <Component {...pageProps} />}
          </MainLayout>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(App);
