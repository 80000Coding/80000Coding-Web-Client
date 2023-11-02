import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const Alert = ({ isOpen, onClose }: Props) => {
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
    </>
  )
}
export default Alert

Alert.displayName = 'Alert'
