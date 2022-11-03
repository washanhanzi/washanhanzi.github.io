import '../styles/globals.css'
import "../styles/prism.css"
import "../styles/oneDark.css"
import "../styles/posts.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
