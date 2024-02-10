import { ReactNode } from 'react'

import styles from './styles.module.scss'

type ButtonProps = {
  children: ReactNode
  isDisabled?: boolean
  onClick?: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles['button']}>
      {children}
    </button>
  )
}
