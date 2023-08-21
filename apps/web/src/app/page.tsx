'use client'

import { useState } from 'react'

import Header from '@/components/common/header'
import { Toggle } from '@/components/Toggle'

export default function Home() {
  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    setIsChecked((prevChecked) => !prevChecked)
  }

  return (
    <main>
      <Header />

      <Toggle isChecked={isChecked} onToggleClick={handleClick}></Toggle>
      <Toggle />
    </main>
  )
}
