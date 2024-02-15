import { ReactNode } from 'react'

import styles from './styles.module.scss'

type ButtonProps = {
  children: ReactNode
  isDisabled?: boolean
  onClick?: () => void
  type: 'submit' | 'reset' | 'button'
}

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={styles['button']}>
      {children}
    </button>
  )
}
