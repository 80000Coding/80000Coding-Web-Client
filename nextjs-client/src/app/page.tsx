'use client'

import { useCallback } from 'react'

export default function Home() {
  const abc = useCallback(() => {
    console.log('hihi')
  }, [])

  return <main className='hover:text-gray-700 bg-gray-500 text-gray-500 flex'>Hello World</main>
}
