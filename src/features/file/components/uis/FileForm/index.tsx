import { useForm } from 'react-hook-form'

import { Button } from '@/components/uis/Button'
import { InputFileWithLabel } from '@/components/uis/InputFile/InputFileWithLabel'
import { InputTextWithLabel } from '@/components/uis/InputText/InputTextWithLabel'
import { TextareaWithLabel } from '@/components/uis/InputTextarea/TextareaWithLabel'

import styles from './styles.module.scss'

type FileFormProps = {
  fileName: string
  memo: string
  file: File
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
      <InputTextWithLabel
        error={errors.fileName?.message}
        type='text'
        name='fileName'
        label='ファイル名'
        placeholder='ファイル名を入力してください'
        control={control}
      />
      <TextareaWithLabel
        error={errors.memo?.message}
        name='memo'
        label='備考'
        placeholder='備考を入力してください'
        control={control}
      />
      <InputFileWithLabel
        error={errors.file?.message}
        name='file'
        label='ファイル'
        control={control}
      />

      <div className={styles['button-wrap']}>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  )
}
