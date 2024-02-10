import { Button } from '@/components/uis/Button'
import { InputTextWithLabel } from '@/components/uis/Inputs/InputTextWithLabel'

import styles from './styles.module.scss'

export const ProfileForm = () => {
  return (
    <form action=''>
      <InputTextWithLabel
        type='text'
        name='name'
        label='氏名'
        placeholder='入力してください'
      />
      <InputTextWithLabel
        type='email'
        name='email'
        label='メールアドレス'
        placeholder='入力してください'
      />
      <InputTextWithLabel
        type='text'
        name='division'
        label='事業部'
        placeholder='入力してください'
      />

      <div className={styles['button-wrap']}>
        <Button>Chancel</Button>
        <Button>Submit</Button>
      </div>
    </form>
  )
}
