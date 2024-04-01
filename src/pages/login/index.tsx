import { Header } from '@/components/layouts/Header'
import { Section } from '@/components/layouts/Section'
import { PageTitle } from '@/components/uis/Titles/PageTite'

import { LoginForm } from '@/features/login/components/uis/LoginForm'

import styles from './styles.module.scss'

const Login = () => {
  return (
    <div className={styles['wrap']}>
      <Header />
      <main className={styles['main']}>
        <PageTitle title='Login' />
        <Section>
          <LoginForm />
        </Section>
      </main>
    </div>
  )
}

export default Login
