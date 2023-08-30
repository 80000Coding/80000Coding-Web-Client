import { DynamicCloseIcon, DynamicTrangleIcon } from '@80000coding/web-icons'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ScrollShadow, useDisclosure } from '@nextui-org/react'
import classNames from 'classnames'
import { useCallback, useState } from 'react'

import useFilterRouter from './useFilterRouter'

const organizations = [
  { id: 1, label: '전체' },
  { id: 2, label: '42 Seoul' },
  { id: 3, label: 'Apple Developer Academy' },
  { id: 4, label: 'Apple' },
  { id: 5, label: 'Microsoft' },
  { id: 6, label: 'Google' },
]

export default function OrganizationFilter() {
  const { moveToParams, organization } = useFilterRouter()
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const defaultOrganization = organizations[organization - 1] ?? organizations[0]
  const [selectedOrganization, setSelectedOrganization] = useState(defaultOrganization)

  const handleOrganizationClick = useCallback((index: number) => {
    setSelectedOrganization(organizations[index])
  }, [])

  const handleOrganizationSubmit = useCallback(() => {
    console.log(selectedOrganization)
    onClose()
    moveToParams({ org: selectedOrganization.id })
  }, [selectedOrganization, onClose, moveToParams])

  return (
    <>
      <button onClick={onOpen} className='flex shrink-0 items-center gap-x-2 rounded-[20px] border border-gray-300 py-2 pl-4 pr-3'>
        <span className='body-3'>조직</span>
        <span className='body-2 text-green'>{defaultOrganization.label}</span>
        <DynamicTrangleIcon className='mt-0.5 h-[7px] w-[7px]' />
      </button>
      <Modal
        size='full'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ footer: 'p-0 mx-5 mt-4 mb-8', body: 'p-0 mx-5 mt-[74px] mb-[106px] overflow-y-hidden' }}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          },
        }}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='relative flex justify-center px-4 py-5'>
                <DynamicCloseIcon onClick={onClose} className='mr-auto h-5 w-5' />
                <span className='title-1 absolute'>조직</span>
              </ModalHeader>
              <ModalBody>
                <ScrollShadow size={150} className='h-full'>
                  <div className='flex h-full flex-col justify-start gap-y-6'>
                    {organizations.map(({ id, label }, index) => (
                      <button
                        key={id}
                        className={classNames(id === selectedOrganization.id && 'text-green', 'title-1')}
                        onClick={() => handleOrganizationClick(index)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter>
                <button onClick={handleOrganizationSubmit} className='bg-green title-1 w-full rounded-3xl py-4 text-center text-white'>
                  적용하기
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
