import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { bgColor } from '@/utils/themeConfigs/customTheme'

const Box = styled('div')`
  text-align: center;
  padding: 32px;
  background-color: ${bgColor.white};
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  flex: 1;
`
interface InnerProps {
  children: ReactNode
}

export const Inner = ({ children }: InnerProps) => {
  return <Box>{children}</Box>
}
