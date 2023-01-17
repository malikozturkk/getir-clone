import Layout from '../components/Layout'
import '../styles/globals.scss'
import '../styles/flags.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
