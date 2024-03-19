import { Control, FieldValues, FieldPath } from 'react-hook-form'

import { InputFileControl } from '@/components/uis/InputFile/InputFileControl'

import styles from './styles.module.scss'

type FormFieldProps<FORM_TYPE extends FieldValues> = {
  label?: string
  name: FieldPath<FORM_TYPE>
  control: Control<FORM_TYPE>
  error?: string
}

export const InputFileWithLabel = <FORM_TYPE extends FieldValues>({
  label,
  error,
}: FormFieldProps<FORM_TYPE>): React.ReactElement => {
  return (
    <div>
      <label className={styles['label-wrap']}>
        <span className={styles['label-text']}>{label}</span>
        <InputFileControl />
        {error && <p className={styles['error-text']}>{error}</p>}
      </label>
    </div>
  )
}
