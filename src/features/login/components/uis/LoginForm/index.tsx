import { Button } from '@/components/uis/Button'
import { InputTextWithLabel } from '@/components/uis/Inputs/InputTextWithLabel'

import styles from './styles.module.scss'

export const LoginForm = () => {
  return (
    <form action=''>
      <InputTextWithLabel
        type='email'
        name='email'
        label='メールアドレス'
        placeholder='入力してください'
      />
      <InputTextWithLabel
        type='password'
        name='password'
        label='パスワード'
        placeholder='入力してください'
      />

      <div className={styles['button-wrap']}>
        <Button>Submit</Button>
      </div>
    </form>
  )
}
