import dynamic from 'next/dynamic'

const RemirrorEditor = dynamic(() => import('../../components/RemirrorEditor/RemirrorEditor'), { ssr: false })

export default function Page() {
  return (
    <div className='m-10 flex gap-x-8'>
      <RemirrorEditor />
    </div>
  )
}
