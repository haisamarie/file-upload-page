import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface SectionProps {
  children: ReactNode
}

export const Section = ({ children }: SectionProps) => {
  return <section className={styles['section']}>{children}</section>
}
