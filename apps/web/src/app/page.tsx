'use client'

import { Toggle, Button, LoadingButtonIcon, LoadingPageIcon } from '@80000coding/ui'
import { useState } from 'react'

import Header from '@/components/common/header'

export default function Home() {
  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    setIsChecked((prevChecked) => !prevChecked)
  }

  return (
    <main>
      {/* <Header /> */}
      <LoadingButtonIcon />
      <LoadingPageIcon />
      <Toggle isChecked={isChecked} onToggleClick={handleClick}></Toggle>
      <Toggle />
    </main>
  )
}
