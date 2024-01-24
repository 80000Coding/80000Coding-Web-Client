'use client'

import { Alert, Button, Chip, IconChip, ThemeDropdown } from '@80000coding/ui'
import { useDisclosure } from '@nextui-org/react'

export default function AlertPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button text='primary' variant='primary' />
      <Button text='secondary' variant='secondary' />
      <Button text='warning' variant='warning' />
      <div className='flex p-[20px]'>
        <Chip text='chip' />
        <IconChip size='md' />
      </div>
      <Button text='Alert Test' variant='secondary' onClick={onOpen} />
      <Alert
        onClose={onClose}
        isOpen={isOpen}
        firstButton={{
          action: () => {
            onClose()
          },
          text: '닫기',
          variant: 'secondary',
        }}
        secondButton={{
          action: () => {},
          text: '저장',
          variant: 'primary',
        }}
        header='hello'
        body='hello'
      />
      <ThemeDropdown />
    </>
  )
}
