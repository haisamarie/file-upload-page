import '@/style/reset.module.css'
import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material'

import { Meta } from '@/components/layouts/Other/Meta'

import { theme } from '@/functions/themeConfigs'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <Meta />
      <Component {...pageProps} />
    </MUIThemeProvider>
  )
}

export default App
