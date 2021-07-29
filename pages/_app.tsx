import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from '@chakra-ui/react'
import theme from '../styles/theme'
import Page from 'components/page'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  )
}
export default MyApp
