import { Control, FieldValues, FieldPath } from 'react-hook-form'

import { InputControl } from '@/components/uis/Inputs/InputControl'

import styles from './styles.module.scss'

type FormFieldProps<FORM_TYPE extends FieldValues> = {
  label?: string
  name: FieldPath<FORM_TYPE>
  control: Control<FORM_TYPE>
  error?: string
  type: 'email' | 'text' | 'password'
}

export const InputTextWithLabel = <FORM_TYPE extends FieldValues>({
  label,
  name,
  control,
  error,
  type,
}: FormFieldProps<FORM_TYPE>): React.ReactElement => {
  return (
    <div>
      <label className={styles['label-wrap']}>
        <span className={styles['label-text']}>{label}</span>
        <InputControl name={name} control={control} type={type} />
        {error && <p className={styles['error-text']}>{error}</p>}
      </label>
    </div>
  )
}
