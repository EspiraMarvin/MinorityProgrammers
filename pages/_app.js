import Layout from '../components/layouts/Layout'
import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </>

  )
}

export default MyApp
