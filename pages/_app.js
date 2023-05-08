import Layout from '../components/Layout'
import '../styles/globals.scss'
import '../styles/flags.scss'
import { Provider } from "react-redux"
import store from "../store"
import React, { Suspense } from 'react'
import '../i18next'
function MyApp({ Component, pageProps }) {
  return (

    <Provider store={store}>
      <Suspense fallback={(<div>Loading</div>)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Suspense>
    </Provider>
  )
}

export default MyApp
