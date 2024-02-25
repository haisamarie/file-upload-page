import React, { Ref } from 'react'

import styles from './styles.module.scss'

type InputProps = {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  inputRef?: Ref<HTMLInputElement>
  disabled?: boolean
}

export const BasicInputFile = ({
  value = '',
  onChange,
  onBlur,
  inputRef,
  disabled,
  ...props
}: InputProps): JSX.Element => {
  return (
    <input
      className={styles['input']}
      ref={inputRef}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      value={value}
      disabled={disabled}
      {...props}
      type='file'
    ></input>
  )
}
