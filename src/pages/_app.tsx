import '@/assets/css/reset.css'
import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material'

import { theme } from '@/utils/themeConfigs'

import { Meta } from '@/components/layouts/Other/Meta'

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
