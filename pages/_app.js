import Navbar from '@/components/utils/navBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} /></>
}
