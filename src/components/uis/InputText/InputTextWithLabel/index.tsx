import { Control, FieldValues, FieldPath } from 'react-hook-form'

import { InputTextControl } from '@/components/uis/InputText/InputTextControl'

import styles from './styles.module.scss'

type FormFieldProps<FORM_TYPE extends FieldValues> = {
  label?: string
  name: FieldPath<FORM_TYPE>
  control: Control<FORM_TYPE>
  error?: string
  type: 'email' | 'text' | 'password'
  placeholder: string
}

export const InputTextWithLabel = <FORM_TYPE extends FieldValues>({
  label,
  name,
  control,
  error,
  type,
  placeholder,
}: FormFieldProps<FORM_TYPE>): React.ReactElement => {
  return (
    <div>
      <label className={styles['label-wrap']}>
        <span className={styles['label-text']}>{label}</span>
        <InputTextControl
          placeholder={placeholder}
          name={name}
          control={control}
          type={type}
        />
        {error && <p className={styles['error-text']}>{error}</p>}
      </label>
    </div>
  )
}
