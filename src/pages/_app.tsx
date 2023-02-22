import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import Wrapper from 'components/Wrapper/Wrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}