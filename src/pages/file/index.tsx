import { Header } from '@/components/layouts/Header'
import { Main } from '@/components/layouts/Main'
import { Section } from '@/components/layouts/Section'
import { Sidebar } from '@/components/layouts/Sidebar'
import { Button } from '@/components/uis/Button'
import { BasicTableWithPagination } from '@/components/uis/Table/BasicTableWithPagination'
import { PageTitle } from '@/components/uis/Titles/PageTite'

import styles from './styles.module.scss'

type TableColumn = {
  label: string
  value: string
}
type TableData = {
  [key: string]: string
}

const File = () => {
  const columns: TableColumn[] = [
    { label: 'ファイル', value: 'file' },
    { label: '説明', value: 'memo' },
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
            <Button type='submit'>Edit</Button>
          </div>
        </Main>
      </div>
    </>
  )
}
export default File
