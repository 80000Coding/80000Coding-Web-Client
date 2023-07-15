import Code from '@editorjs/code'
import EditorJS, { OutputData } from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import React, { memo, useEffect, useRef } from 'react'

export const EDITOR_TOOLS = {
  code: Code,
  header: Header,
  paragraph: Paragraph,
}

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
        tools: EDITOR_TOOLS,
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
