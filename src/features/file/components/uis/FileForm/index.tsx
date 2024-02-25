import { useForm } from 'react-hook-form'

import { Button } from '@/components/uis/Button'
import { TextareaWithLabel } from '@/components/uis/InputTextarea/TextareaWithLabel'

import styles from './styles.module.scss'

type FileFormProps = {
  name: string
  email: string
  division: string
}
export const FileForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FileFormProps>({})

  const onSubmit = (data: FileFormProps) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextareaWithLabel
        error={errors.name?.message}
        name='name'
        label='備考'
        placeholder='備考を入力してください'
        control={control}
      />

      <div className={styles['button-wrap']}>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  )
}
