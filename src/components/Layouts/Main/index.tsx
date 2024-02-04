import styled from '@emotion/styled'
import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface MainProps {
  children: ReactNode
}

const Wrap = styled('section')``

export const Main = ({ children }: MainProps) => {
  return (
    <>
      <main className={styles['main']}>
        <Wrap>{children}</Wrap>
      </main>
    </>
  )
}
