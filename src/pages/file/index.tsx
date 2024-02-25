import { useState } from 'react'

import { Header } from '@/components/layouts/Header'
import { Main } from '@/components/layouts/Main'
import { Section } from '@/components/layouts/Section'
import { Sidebar } from '@/components/layouts/Sidebar'
import { Button } from '@/components/uis/Button'
import { Modal } from '@/components/uis/Modal'
import { BasicTableWithPagination } from '@/components/uis/Table/BasicTableWithPagination'
import { PageTitle } from '@/components/uis/Titles/PageTite'

import { FileForm } from '@/features/file/components/uis/FileForm'

import styles from './styles.module.scss'

type TableColumn = {
  label: string
  value: string
}
type TableData = {
  [key: string]: string
}

const File = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const columns: TableColumn[] = [
    { label: 'ファイル', value: 'file' },
    { label: '備考', value: 'memo' },
    { label: '申請日', value: 'create_at' },
  ]

  const data: TableData[] = [
    {
      file: 'example.png',
      memo: 'システム本部',
      create_at: '2024-09-12',
    },
    {
      file: 'example.png',
      memo: 'システム本部',
      create_at: '2024-09-12',
    },
    {
      file: 'example.png',
      memo: 'システム本部',
      create_at: '2024-09-12',
    },
    {
      file: 'example.png',
      memo: 'システム本部',
      create_at: '2024-09-12',
    },
    {
      file: 'example.png',
      memo: 'システム本部',
      create_at: '2024-09-12',
    },
    {
      file: 'example.png',
      memo: 'システム本部',
      create_at: '2024-09-12',
    },
  ]
  return (
    <>
      <Header />
      <div className={styles['contents-wrap']}>
        <Sidebar />
        <Main>
          <PageTitle title='File' />

          <Section>
            <BasicTableWithPagination basePath='/file' columns={columns} data={data} />
          </Section>
          <div className={styles['button-wrap']}>
            <Button type='submit' onClick={openModal}>
              Edit
            </Button>
          </div>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} title='Fileを編集する'>
            <FileForm />
          </Modal>
        </Main>
      </div>
    </>
  )
}
export default File
