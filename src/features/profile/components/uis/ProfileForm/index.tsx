import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/uis/Button'
import { InputTextWithLabel } from '@/components/uis/InputText/InputTextWithLabel'

import { profileSchema } from '@/features/profile/hooks/schemas/validationSchema'

import styles from './styles.module.scss'

type ProfileFormProps = {
  name: string
  email: string
  division: string
}
export const ProfileForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormProps>({
    mode: 'onSubmit',
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      email: '',
      division: '',
    },
  })

  const onSubmit = (data: ProfileFormProps) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputTextWithLabel
        error={errors.name?.message}
        type='text'
        name='name'
        label='氏名'
        placeholder='氏名を入力してください'
        control={control}
      />
      <InputTextWithLabel
        label='メールアドレス'
        name='email'
        control={control}
        error={errors.email?.message}
        type='email'
        placeholder='メールアドレスを入力してください'
      />
      <InputTextWithLabel
        type='text'
        name='division'
        label='事業部'
        control={control}
        error={errors.division?.message}
        placeholder='事業部を入力してください'
      />

      <div className={styles['button-wrap']}>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  )
}
