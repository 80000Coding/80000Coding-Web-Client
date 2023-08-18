'use client'

import { useCallback, useState } from 'react'

import { Toggle } from '@/components/Toggle'

export default function Home() {
  const abc = useCallback(() => {
    console.log('hihi')
  }, [])

  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    setIsChecked((prevChecked) => !prevChecked)
  }

  return (
    <main className='flex bg-gray-500 text-gray-500 hover:text-gray-700'>
      Hello World
      <Toggle isChecked={isChecked} onToggleClick={handleClick}></Toggle>
      <Toggle />
    </main>
  )
}
