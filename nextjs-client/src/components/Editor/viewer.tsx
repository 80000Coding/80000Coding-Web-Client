import { OutputData } from '@editorjs/editorjs'
import editorJsHtml from 'editorjs-html'

type Props = {
  data?: OutputData
}
type ParsedContent = string | JSX.Element

const Viewer = ({ data }: Props) => {
  const html = data ? (editorJsHtml().parse(data) as ParsedContent[]) : []

  return (
    //✔️ It's important to add key={data.time} here to re-render based on the latest data.
    <div className='prose max-w-full' key={data?.time}>
      {html.map((item, index) => {
        if (typeof item === 'string') {
          return <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
        }
        return item
      })}
    </div>
  )
}

export default Viewer
