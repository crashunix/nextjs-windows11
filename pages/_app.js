import '../styles/globals.css'
import { MenuProvider } from "../stores/menu";

function MyApp({ Component, pageProps }) {
  return <MenuProvider><Component {...pageProps} /></MenuProvider>
}

export default MyApp
