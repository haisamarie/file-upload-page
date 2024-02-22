import { Header } from '@/components/layouts/Header'
import { Main } from '@/components/layouts/Main'
import { Section } from '@/components/layouts/Section'
import { Sidebar } from '@/components/layouts/Sidebar'
import { PageTitle } from '@/components/uis/Titles/PageTite'

import { ProfileList } from '@/features/profile/components/uis/ProfileList'

import styles from './styles.module.scss'

const File = () => {
  const userData = {
    name: '山田花子',
    email: 'example.co.jp',
    department: 'システム本部',
  }

  const items = [
    { term: '氏名', description: userData.name },
    { term: 'メールアドレス', description: userData.email },
    { term: '事業部', description: userData.department },
  ]
  return (
    <>
      <Header />
      <div className={styles['contents-wrap']}>
        <Sidebar />
        <Main>
          <PageTitle title='File' />

          <Section>
            <ProfileList items={items} />
          </Section>
        </Main>
      </div>
    </>
  )
}

export default File
