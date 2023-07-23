import type { EditorConfig } from '@editorjs/editorjs'
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image'
import Paragraph from '@editorjs/paragraph'

import { SyntaxCode } from './SyntaxCode'

export const EditorTools: EditorConfig['tools'] = {
  code: {
    class: SyntaxCode,
    config: {
      placeholder: 'Enter your code here...',
    },
  },
  header: {
    class: Header,
    inlineToolbar: ['link'],
  },
  paragraph: Paragraph,
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: 'http://localhost:3001/api/image', // Your backend file uploader endpoint
        byUrl: 'http://localhost:3001/api/image', // Your endpoint that provides uploading by Url
      },
    },
  },
}
