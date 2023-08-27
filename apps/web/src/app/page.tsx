'use client'

import Header from '@/components/common/header'
import Filters from '@/components/main/filters'
import MainQuickPanel from '@/components/main/main-quick-panel'

export default function Home() {
  return (
    <main>
      <Header />

      <div>
        <MainQuickPanel />
        <Filters />
      </div>
    </main>
  )
}
