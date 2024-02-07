import { ReactNode } from 'react'

import styles from './styles.module.scss'

type MainProps = {
  children: ReactNode
}

export const Main = ({ children }: MainProps) => {
  return <main className={styles['main']}>{children}</main>
}
