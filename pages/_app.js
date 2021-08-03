import Layout from '../components/layouts/Layout'
import Head from "next/head";

// add bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'

import {Container} from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Container>
              {/*<Head>*/}
              {/*</Head>*/}
          <Layout>
            <Component {...pageProps} />
          </Layout>
          </Container>
      </>

  )
}

export default MyApp
