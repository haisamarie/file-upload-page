import React, { Ref } from 'react'

import styles from './styles.module.scss'

type InputProps = {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  inputRef?: Ref<HTMLInputElement>
  disabled?: boolean
  type: 'email' | 'text' | 'password'
  placeholder?: string
}

export const BasicInput = ({
  value = '',
  onChange,
  onBlur,
  inputRef,
  disabled,
  type,
  placeholder,
  ...props
}: InputProps): JSX.Element => {
  return (
    <input
      placeholder={placeholder}
      className={styles['input']}
      ref={inputRef}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      value={value}
      type={type}
      disabled={disabled}
      {...props}
    ></input>
  )
}
