import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React, { ComponentProps } from 'react'

import { Button } from '../button'

type FooterButton = {
  action: () => void
  className?: string
  variant?: ComponentProps<typeof Button>['variant']
  text: string
}

type Props = {
  header: string
  body?: React.ReactNode
  firstButton?: FooterButton
  secondButton?: FooterButton
} & Omit<ComponentProps<typeof Modal>, 'children'>

const Alert = ({ firstButton, secondButton, header, body, hideCloseButton = true, ...rest }: Props) => {
  return (
    <>
      <Modal
        classNames={{
          base: 'rounded-[12px]',
          header: 'justify-center ',
          body: 'text-center',
        }}
        placement='center'
        hideCloseButton={hideCloseButton}
        {...rest}
      >
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalBody>{body}</ModalBody>
          <ModalFooter>
            {firstButton && (
              <Button
                variant={firstButton.variant}
                text={firstButton.text}
                className={firstButton.className}
                onClick={firstButton.action}
              />
            )}
            {secondButton && (
              <Button
                variant={secondButton.variant}
                text={secondButton.text}
                className={secondButton.className}
                onClick={secondButton.action}
              />
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default Alert

Alert.displayName = 'Alert'
