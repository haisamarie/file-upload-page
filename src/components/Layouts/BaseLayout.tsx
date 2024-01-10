import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { gradient } from '@/utils/themeConfigs/customTheme'

interface LayoutProps {
  children: ReactNode
}

const Main = styled('main')`
  overflow: scroll;
  height: 100vh;
  background-image: ${gradient.blueToPinkGradient};
`
const Wrap = styled('div')``

export const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <Main>
      <Wrap>{children}</Wrap>
    </Main>
  )
}
