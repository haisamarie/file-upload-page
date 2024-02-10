import { BasicInput } from '@/components/uis/Inputs/BasicInput'

import styles from './styles.module.scss'

type InputProps = {
  type: string
  name: string
  placeholder: string
  label: string
}

export const InputTextWithLabel = ({ type, name, placeholder, label }: InputProps) => {
  return (
    <label className={styles['label-wrap']}>
      <span className={styles['label-text']}>{label}</span>
      <BasicInput type={type} name={name} placeholder={placeholder} />
    </label>
  )
}
