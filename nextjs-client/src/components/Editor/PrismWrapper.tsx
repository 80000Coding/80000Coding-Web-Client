import Prism from 'prismjs'
import { highlight, languages } from 'prismjs'
import React, { useEffect } from 'react'
import Editor from 'react-simple-code-editor'

import 'prismjs/themes/prism.css'

type Props = {
  code: string
  readOnly?: boolean
} & React.HTMLAttributes<HTMLTextAreaElement>

const PrismWrapper = ({ code, className, readOnly = false }: Props) => {
  const [value, setValue] = React.useState(code)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Editor
      className={className}
      value={value}
      onValueChange={setValue}
      highlight={(code) => highlight(code, languages.js, 'js')}
      padding={10}
      readOnly={readOnly}
    />
  )
}

export default PrismWrapper