import React, { Ref } from 'react'

import styles from './styles.module.scss'

type InputProps = {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  inputRef?: Ref<HTMLTextAreaElement>
  disabled?: boolean
  placeholder?: string
}

export const BasicTextarea = ({
  value = '',
  onChange,
  onBlur,
  inputRef,
  disabled,
  placeholder,
  ...props
}: InputProps): JSX.Element => {
  return (
    <textarea
      placeholder={placeholder}
      className={styles['textarea']}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      ref={inputRef}
      value={value}
      disabled={disabled}
      {...props}
    ></textarea>
  )
}
