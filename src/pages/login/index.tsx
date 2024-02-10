import { Header } from '@/components/layouts/Header'
import { Section } from '@/components/layouts/Section'
import { Button } from '@/components/uis/Button'
import { PageTitle } from '@/components/uis/Titles/PageTite'

import styles from './styles.module.scss'

const Login = () => {
  const onLogin = () => {
    alert('ログインしたよ')
  }

  return (
    <>
      <Header />
      <div className={styles['contents-wrap']}>
        <main className={styles['main']}>
          <PageTitle title='Login' />
          <Section>
            <form action=''>
              <div>
                <label>
                  メールアドレス
                  <input type='email' name='email' />
                </label>
              </div>
              <div>
                <label>
                  パスワード
                  <input type='password' name='password' />
                </label>
              </div>

              <div>
                <Button onClick={onLogin}>Login</Button>
              </div>
            </form>
          </Section>
        </main>
      </div>
    </>
  )
}

export default Login
