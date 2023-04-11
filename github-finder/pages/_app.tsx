import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { mont } from '@/fonts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={mont.className}>
      <Component {...pageProps} />
    </div>
  )
}
