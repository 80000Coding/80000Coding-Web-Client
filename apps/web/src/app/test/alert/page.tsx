'use client'

import { Alert, Button } from '@80000coding/ui'
import { useDisclosure } from '@nextui-org/react'

export default function AlertPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button text='GitHub로 계속하귕' className='bg-black' onClick={onOpen} />
      <Alert
        onClose={onClose}
        isOpen={isOpen}
        firstButton={{
          action: () => {
            onClose()
          },
          text: '닫기',
          variant: 'outline',
          className: '',
        }}
        secondButton={{
          action: () => {},
          text: '저장',
          variant: 'primary',
          className: 'bg-green',
        }}
        header='hello'
        body='hello'
      />
    </>
  )
}
