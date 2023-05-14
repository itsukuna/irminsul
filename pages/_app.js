import Navbar from '@/components/utils/navBar'
import '@/styles/globals.css'
import CustomTheme from '@/components/theme/theme'

export default function App({ Component, pageProps }) {
  return <CustomTheme>
    <Navbar />
    <Component {...pageProps} />
  </CustomTheme>
}
