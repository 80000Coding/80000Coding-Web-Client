'use client'
import type { OutputData } from '@editorjs/editorjs'
import { useEffect, useState } from 'react'

import { EditorBlock } from '@/components'
import Viewer from '@/components/BlockEditor/viewer'

export default function Page() {
  const [data, setData] = useState<OutputData>()

  useEffect(() => {
    console.log(data?.blocks)
  }, [data])

  return (
    <div className='m-10 flex gap-x-8'>
      <div className='w-full'>
        <h1>Editor</h1>
        <div className='rounded-md border border-black'>
          <EditorBlock data={data} onChangeEditor={setData} holder='editorjs-container' />
        </div>
      </div>
      <div className='w-full'>
        <h1>Preview</h1>
        <div className='rounded-md border border-black'>
          <div className='min-h-[338px] pb-[300px]'>{data && <Viewer data={data} />}</div>
        </div>
      </div>
    </div>
  )
}
