import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import React from 'react'

type Props = {
  isOpen: boolean
}

const Alert = ({ isOpen }: Props) => {
  const { onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal
        classNames={{
          base: 'rounded-[12px]',
        }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <div>hell</div>
    </>
  )
}
export default Alert

Alert.displayName = 'Alert'
