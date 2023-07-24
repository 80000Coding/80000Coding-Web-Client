import EditorJS, { OutputData } from '@editorjs/editorjs'
import React, { memo, useEffect, useRef } from 'react'

import { EditorTools, EditorTunes } from './EditorTools'

//props
type Props = {
  data?: OutputData
  onChangeEditor(val: OutputData): void
  holder: string
} & React.HTMLAttributes<HTMLDivElement>

const EditorBlock = ({ data, onChangeEditor, holder, ...props }: Props) => {
  //add a reference to editor
  const ref = useRef<EditorJS>()

  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EditorTools,
        tunes: EditorTunes,
        inlineToolbar: true,
        data,
        async onChange(api, event) {
          const data = await api.saver.save()
          onChangeEditor(data)
        },
      })
      ref.current = editor
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy()
      }
    }
  }, [])

  return <div id={holder} {...props} />
}

export default memo(EditorBlock)
