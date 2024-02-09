import { useState } from 'react'

import { Header } from '@/components/layouts/Header'
import { Main } from '@/components/layouts/Main'
import { Section } from '@/components/layouts/Section'
import { Sidebar } from '@/components/layouts/Sidebar'
import { Button } from '@/components/uis/Button'
import { Modal } from '@/components/uis/Modal'
import { PageTitle } from '@/components/uis/Titles/PageTite'

import { ProfileList } from '@/features/profile/components/uis/ProfileList'

import styles from './styles.module.scss'

const Home = () => {
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

  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <Header />
      <div className={styles['contents-wrap']}>
        <Sidebar />
        <Main>
          <PageTitle title='Profile' />

          <Section>
            <ProfileList items={items} />
          </Section>
          <div className={styles['button-wrap']}>
            <Button onClick={openModal}>Edit</Button>
          </div>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
        </Main>
      </div>
    </>
  )
}

export default Home
