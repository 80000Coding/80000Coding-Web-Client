'use client'
import { Chip, IconChip } from '@80000coding/ui'

// import { icons } from '@80000coding/web-icons'

export default function Page() {
  return (
    <div className='flex h-screen w-screen flex-col items-start gap-2 bg-[#000] p-20'>
      <Chip text='#인증' />
      <IconChip categoryIconNames='Swift-rounded' />
      <IconChip categoryIconNames='TypeScript-rounded' />
      <IconChip categoryIconNames='AppleDeveloperAcademy-rounded' size='md' />
    </div>
  )
}
