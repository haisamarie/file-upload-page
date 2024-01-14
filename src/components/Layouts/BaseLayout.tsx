import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { gradient, textColor } from '@/utils/themeConfigs/customTheme'

import { Header } from '@/components/layouts/Header'
import { Sidebar } from '@/components/layouts/Sidebar'

interface LayoutProps {
  children: ReactNode
}

const Main = styled('main')`
  overflow: scroll;
  background-image: ${gradient.blueToPinkGradient};
  color: ${textColor.white};
  display: flex;
  height: calc(100vh - 64px);
`
const Wrap = styled('section')``

export const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <Wrap>{children}</Wrap>
      </Main>
    </>
  )
}
