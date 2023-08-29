import { Chip, IconChip, SearchChip } from '@80000coding/ui'
import ButtonChip from '@80000coding/ui/src/chip/ButtonChip'
// import { icons } from '@80000coding/web-icons'

export default function Page() {
  return (
    <div className='flex h-screen w-screen flex-col items-start gap-2 bg-[#000] p-20'>
      <Chip text='인증' size='lg' variant='primary' disabled />
      <Chip text='인증' size='lg' variant='primary' />
      <Chip text='대기' size='lg' variant='outline' disabled />
      <Chip text='완료' size='lg' variant='outline' />

      <Chip text='답글 달기' size='sm' variant='plain' />
      <Chip text='설정' size='sm' variant='plain' />
      <Chip text='#태그' size='xs' variant='flat' />
      <Chip text='+3' size='xs' variant='flat' />

      <IconChip />
      <IconChip erasable />
      <IconChip categoryIconNames='category-TypeScript' />
      <IconChip erasable categoryIconNames='category-TypeScript' />
      <IconChip erasable categoryIconNames='category-React' variant='primary' />

      <ButtonChip />
      <ButtonChip type='cancel' />

      <SearchChip text='최근검색내역' />
    </div>
  )
}
