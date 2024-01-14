import styled from '@emotion/styled'
import { ReactNode } from 'react'

const Box = styled('div')`
  text-align: center;
  padding: 32px;
  width: 100%;
  margin: 0 auto;
`
interface InnerProps {
  children: ReactNode
}

export const Inner = ({ children }: InnerProps) => {
  return <Box>{children}</Box>
}
