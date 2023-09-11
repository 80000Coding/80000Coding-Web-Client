'use client'

import { Chip } from '@80000coding/ui'
import { InputBox } from '@80000coding/ui'

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
      <Chip></Chip>
      <InputBox typingError={true}></InputBox>
    </main>
  )
}
