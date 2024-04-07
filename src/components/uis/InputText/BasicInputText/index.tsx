import React, { Ref } from 'react'

import styles from './styles.module.scss'

type InputTextProps = {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  inputRef?: Ref<HTMLInputElement>
  disabled?: boolean
  type: 'email' | 'text' | 'password' | 'select'
  placeholder?: string
}

export const BasicInputText = ({
  value = '',
  onChange,
  onBlur,
  inputRef,
  disabled,
  type,
  placeholder,
  ...props
}: InputTextProps): JSX.Element => {
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
