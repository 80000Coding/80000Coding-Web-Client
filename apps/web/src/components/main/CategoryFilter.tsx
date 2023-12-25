import { DynamicNavCloseIcon, StaticFilteringIcon } from '@80000coding/web-icons'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ScrollShadow, useDisclosure } from '@nextui-org/react'
import classNames from 'classnames'
import { useCallback, useState } from 'react'

import useFilterRouter from './useFilterRouter'

const categories = [
  { id: 1, label: '전체' },
  { id: 2, label: '네트워크' },
  { id: 3, label: '유선 네트워크' },
  { id: 4, label: '무선 네트워크' },
  { id: 5, label: '웹' },
  { id: 6, label: '컴퓨터사이언스' },
  { id: 7, label: '운영체제' },
  { id: 8, label: '알고리즘' },
  { id: 9, label: '딥러닝' },
  { id: 10, label: '그래픽스' },
  { id: 11, label: '수학' },
  { id: 12, label: '개발지식' },
  { id: 13, label: '개발지식2' },
  { id: 14, label: '개발지식3' },
  { id: 15, label: '개발지식4' },
  { id: 16, label: '개발지식5' },
  { id: 17, label: '개발지식6' },
  { id: 18, label: '개발지식7' },
  { id: 19, label: '개발지식8' },
  { id: 20, label: '개발지식9' },
]

export default function CategoryFilter() {
  const { moveToParams, category } = useFilterRouter()
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const defaultCategory = categories[category - 1] ?? categories[0]
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)

  const handleCategoryClick = useCallback((index: number) => {
    setSelectedCategory(categories[index])
  }, [])

  const handleCategorySubmit = useCallback(() => {
    console.log(selectedCategory)
    onClose()
    moveToParams({ category: selectedCategory.id })
  }, [selectedCategory, onClose, moveToParams])

  return (
    <>
      <button onClick={onOpen} className='flex shrink-0 items-center gap-x-2 rounded-[20px] border border-gray-300 py-2 pl-4 pr-3'>
        <span className='body-3 text-gray-600'>카테고리</span>
        <span className='body-2 text-green'>{defaultCategory.label}</span>
        <StaticFilteringIcon className='mt-0.5 h-[7px] w-[7px]' />
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
                <DynamicNavCloseIcon onClick={onClose} className='mr-auto h-5 w-5' />
                <span className='title-1 absolute'>카테고리</span>
              </ModalHeader>
              <ModalBody>
                <ScrollShadow size={150} className='h-full'>
                  <div className='flex flex-col justify-start gap-y-6'>
                    {categories.map(({ id, label }, index) => (
                      <button
                        key={id}
                        className={classNames(id === selectedCategory.id && 'text-green', 'title-1')}
                        onClick={() => handleCategoryClick(index)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter>
                <button onClick={handleCategorySubmit} className='bg-green title-1 w-full rounded-3xl py-4 text-center text-white'>
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
