import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/uis/Button'
import { InputTextWithLabel } from '@/components/uis/Inputs/InputTextWithLabel'

import { loginSchema } from '@/features/login/hooks/schemas/validationSchema'

import styles from './styles.module.scss'

type LoginFormProps = {
  email: string
  password: string
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = (data: LoginFormProps) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputTextWithLabel
        label='メールアドレス'
        name='email'
        control={control}
        error={errors.email?.message}
        type='email'
        placeholder='メールアドレスを入力してください'
      />
      <InputTextWithLabel
        label='パスワード'
        placeholder='パスワードを入力してください'
        name='password'
        control={control}
        error={errors.password?.message}
        type='password'
      />

      <div className={styles['button-wrap']}>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  )
}
