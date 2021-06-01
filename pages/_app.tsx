import '../styles/globals.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Store from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
