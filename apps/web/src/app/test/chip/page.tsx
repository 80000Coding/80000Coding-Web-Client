'use client'
import { Chip, IconChip } from '@80000coding/ui'

export default function Page() {
  return (
    <div className='flex h-screen w-screen flex-col items-start gap-2 bg-[#000] p-20'>
      <Chip text='#인증' size='md' />
      <IconChip categoryIconNames='Swift' />
      <IconChip categoryIconNames='TypeScript' />
      <IconChip categoryIconNames='AppleDeveloperAcademy' />
    </div>
  )
}
