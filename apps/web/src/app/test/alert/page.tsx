'use client'

import { Alert, Button } from '@80000coding/ui'
import { cn, useDisclosure } from '@nextui-org/react'

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button text='hell' variant='primary' className={cn('bg-green')} size='lg' onClick={onOpen} />
      <Alert isOpen={isOpen} onClose={onClose} />
    </>
  )
}
