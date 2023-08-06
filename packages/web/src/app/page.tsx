'use client'

import { useCallback } from 'react'

import { Toggle } from '@/components/Toggle'

export default function Home() {
  const abc = useCallback(() => {
    console.log('hihi')
  }, [])

  return (
    <main className='flex bg-gray-500 text-gray-500 hover:text-gray-700'>
      Hello World
      <Toggle isChecked={false}></Toggle>
    </main>
  )
}
