import Checklist from '@editorjs/checklist'
// import CodeTool from '@editorjs/code';
import Delimiter from '@editorjs/delimiter'
import type { EditorConfig } from '@editorjs/editorjs'
import Embed from '@editorjs/embed'
import Header from '@editorjs/header'
import Image from '@editorjs/image'
import InlineCode from '@editorjs/inline-code'
import LinkTool from '@editorjs/link'
// import List from '@editorjs/list'
import Marker from '@editorjs/marker'
import NestedList from '@editorjs/nested-list'
import Paragraph from '@editorjs/paragraph'
import Quote from '@editorjs/quote'
import RawTool from '@editorjs/raw'
import Table from '@editorjs/table'
import TextVariantTune from '@editorjs/text-variant-tune'
import Underline from '@editorjs/underline'
import Warning from '@editorjs/warning'

import { SyntaxCode } from './SyntaxCode'

export const EditorTools: EditorConfig['tools'] = {
  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },
  code: {
    class: SyntaxCode,
    config: {
      placeholder: 'Enter your code here...',
    },
  },
  delimiter: Delimiter,
  header: {
    class: Header,
    inlineToolbar: true,
  },
  image: {
    class: Image,
    inlineToolbar: true,
    config: {
      endpoints: {
        byFile: 'http://localhost:3000/api/image', // Your backend file uploader endpoint
        byUrl: 'http://localhost:3000/api/image', // Your endpoint that provides uploading by Url
      },
    },
  },

  linkTool: {
    class: LinkTool,
    config: {
      endpoint: 'http://localhost:3000/api/link', // Your backend endpoint for url data fetching,
    },
  },
  list: {
    class: NestedList,
    inlineToolbar: true,
    config: {
      defaultStyle: 'unordered',
    },
  },
  table: {
    class: Table,
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+O',
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: "Quote's author",
    },
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
  },
  underline: Underline,
  // inline tools
  inlineCode: {
    class: InlineCode,
    shortcut: 'CMD+SHIFT+M',
  },
  Marker: {
    class: Marker,
    shortcut: 'CMD+SHIFT+M',
  },
  embed: Embed,
  raw: RawTool,
  // tune tools
  textVariant: TextVariantTune,
}

export const EditorTunes: EditorConfig['tunes'] = ['textVariant']
