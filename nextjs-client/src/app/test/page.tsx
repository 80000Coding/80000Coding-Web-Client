'use client'
import type { OutputData } from '@editorjs/editorjs'
import { useState } from 'react'

import { EditorBlock } from '@/components'

export default function Page() {
  const [data, setData] = useState<OutputData>()
  return (
    <main className='bg-white text-black'>
      <EditorBlock data={data} onChangeEditor={setData} holder='editorjs-container' />
    </main>
  )
}
