import "../app/globals.css"
import { AppProvider } from "@/app/context/AppProvider"
 
export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}