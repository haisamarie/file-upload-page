import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { gradient, textColor } from '@/utils/themeConfigs/customTheme'

interface LayoutProps {
  children: ReactNode
}

const Main = styled('main')`
  overflow: scroll;
  height: 100vh;
  background-image: ${gradient.blueToPinkGradient};
  color: ${textColor.white};
`
const Wrap = styled('div')`
  text-align: center;
  padding: 32px;
  height: 100vh;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`

export const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <Main>
      <Wrap>{children}</Wrap>
    </Main>
  )
}
