import { Control, FieldValues, FieldPath } from 'react-hook-form'

import { TextareaControl } from '@/components/uis/InputTextarea/TextareaControl'

import styles from './styles.module.scss'

type FormFieldProps<FORM_TYPE extends FieldValues> = {
  label?: string
  name: FieldPath<FORM_TYPE>
  control: Control<FORM_TYPE>
  error?: string
  placeholder: string
}

export const TextareaWithLabel = <FORM_TYPE extends FieldValues>({
  label,
  name,
  control,
  error,
  placeholder,
}: FormFieldProps<FORM_TYPE>): React.ReactElement => {
  return (
    <div>
      <label className={styles['label-wrap']}>
        <span className={styles['label-text']}>{label}</span>
        <TextareaControl placeholder={placeholder} name={name} control={control} />
        {error && <p className={styles['error-text']}>{error}</p>}
      </label>
    </div>
  )
}
