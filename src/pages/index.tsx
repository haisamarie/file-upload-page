import { BaseLayout } from '@/components/layouts/BaseLayout'
import { Inner } from '@/components/layouts/Inner'
import { PageTitle } from '@/components/uis/Titles/PageTitle'
const Home = () => {
  return (
    <BaseLayout>
      <PageTitle title='profile' />

      <Inner>
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
      </Inner>
    </BaseLayout>
  )
}

export default Home
