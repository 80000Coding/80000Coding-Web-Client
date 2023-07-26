import cn from 'classnames'
import Prism from 'prismjs'
import { highlight, languages } from 'prismjs'
import React, { useEffect, useState } from 'react'
import Editor from 'react-simple-code-editor'

import 'prismjs/themes/prism.css'

type Props = {
  code: string
  readOnly?: boolean
} & React.HTMLAttributes<HTMLTextAreaElement>

const PrismWrapper = ({ code, className, readOnly = false }: Props) => {
  const [language, setLanguage] = useState('js')
  const [value, setValue] = useState(code)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div>
      <Editor
        className={className}
        value={value}
        onValueChange={setValue}
        highlight={(code) => highlight(code, languages[language], language)}
        padding={10}
        readOnly={readOnly}
      />
      <select
        className='absolute left-2 top-2 z-10 bg-transparent text-xs text-gray-500'
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value='js'>JavaScript</option>
        <option value='css'>CSS</option>
      </select>
    </div>
  )
}

export default PrismWrapper
