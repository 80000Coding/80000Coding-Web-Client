import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

const Alert = () => {
  return (
    <>
      <Modal
        classNames={{
          base: 'rounded-[12px]',
        }}
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
