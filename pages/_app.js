
import '@/app/globals.css'
import Navigation from '@/app/components/Navigation'

export default function MyApp({ Component, pageProps }) {
  return(
    <>
        <Navigation></Navigation>
        <Component {...pageProps} />
    
    </>
)}
