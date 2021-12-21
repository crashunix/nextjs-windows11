import '../styles/globals.css'
import { MenuProvider } from "../providers/menu";

function MyApp({ Component, pageProps }) {
  return <MenuProvider><Component {...pageProps} /></MenuProvider>
}

export default MyApp
