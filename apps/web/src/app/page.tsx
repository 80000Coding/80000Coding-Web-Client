'use client'

import Header from '@/components/common/Header'
import Filters from '@/components/main/Filters'
import MainQuickPanel from '@/components/main/MainQuickPanel'

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
