import { OutputData } from '@editorjs/editorjs'
import editorJsHtml from 'editorjs-html'
import striptags from 'striptags'

import PrismWrapper from './PrismWrapper'

type Props = {
  data?: OutputData
}
type ParsedContent = string

function isCodeBlock(data: ParsedContent) {
  return data.startsWith('<pre><code>') && data.endsWith('</code></pre>')
}

function isImageBlock(data: ParsedContent) {
  return data.startsWith('<img ') && data.endsWith('/>')
}

const Viewer = ({ data }: Props) => {
  const html = data ? (editorJsHtml().parse(data) as ParsedContent[]) : []

  return (
    //✔️ It's important to add key={data.time} here to re-render based on the latest data.
    <div className='prose' key={data?.time}>
      {html.map((item, index) => {
        if (isCodeBlock(item))
          return (
            <div className='cdx-block ce-block__content ce-code'>
              <PrismWrapper readOnly code={striptags(item)} className='ce-code__textarea cdx-input' />
            </div>
          )
        else if (isImageBlock(item))
          return <div dangerouslySetInnerHTML={{ __html: item }} className='cdx-block ce-block__content image-tool__image' key={index} />
        else return <div dangerouslySetInnerHTML={{ __html: item }} className='cdx-block ce-block__content ce-paragraph' key={index} />
      })}
    </div>
  )
}

export default Viewer
