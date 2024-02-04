import { Header } from '@/components/layouts/Header'
import { Main } from '@/components/layouts/Main'
import { Sidebar } from '@/components/layouts/Sidebar'

import styles from './styles.module.scss'

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles['contents-wrap']}>
        <Sidebar />
        <Main>
          <div>
            <h2>名前</h2>
            <p>山田太郎</p>
          </div>
          <div>
            <h2>フリガナ</h2>
            <p>ヤマダタロウ</p>
          </div>
          <div>
            <h2>所属</h2>
            <p>システム本部</p>
          </div>
        </Main>
      </div>
    </>
  )
}

export default Home
