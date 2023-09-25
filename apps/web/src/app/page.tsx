import Header from '@/components/common/Header'
import FeedList from '@/components/main/FeedList'
import Filters from '@/components/main/Filters'
import { listMockData } from '@/components/main/list/mock/listMockData'
import MainQuickPanel from '@/components/main/MainQuickPanel'

export default async function Home() {
  const result = listMockData

  return (
    <main>
      <Header />

      <div>
        <MainQuickPanel />
        <Filters />
      </div>

      <FeedList items={result} />
    </main>
  )
}
