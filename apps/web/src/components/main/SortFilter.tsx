import { DynamicNavCloseIcon, StaticFilteringIcon } from '@80000coding/web-icons'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ScrollShadow, useDisclosure } from '@nextui-org/react'
import classNames from 'classnames'
import { useCallback, useState } from 'react'

import useFilterRouter from './useFilterRouter'

export type SORT_KEYS = 'ID' | 'LIKE' | 'VIEW' | 'SCRAP'

const SORT_OPTION_MAP = new Map<SORT_KEYS, string>([
  ['ID', '최신순'],
  ['LIKE', '좋아요순'],
  ['VIEW', '조회순'],
  ['SCRAP', '스크랩순'],
])

const SORT_OPTIONS = Array.from(SORT_OPTION_MAP).map(([key, label]) => ({
  key,
  label,
}))

export type SortOptionType = {
  key: SORT_KEYS
  label: string
}

export function getOption(key: SORT_KEYS = 'ID') {
  return {
    key,
    label: SORT_OPTION_MAP.get(key),
  } as SortOptionType
}

export default function SortFilter() {
  const { moveToParams, sort } = useFilterRouter()
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const defaultSort = getOption(sort) ?? SORT_OPTIONS[0]

  const [selectedSort, setSelectedSort] = useState(defaultSort)

  const handleSortClick = useCallback((index: number) => {
    setSelectedSort(SORT_OPTIONS[index])
  }, [])

  const handleSortsubmit = useCallback(() => {
    console.log(selectedSort)
    onClose()
    moveToParams({ sort: selectedSort.key })
  }, [selectedSort, onClose, moveToParams])

  return (
    <>
      <button onClick={onOpen} className='flex shrink-0 items-center gap-x-2 rounded-[20px] border border-gray-300 py-2 pl-4 pr-3'>
        <span className='body-3 text-gray-600'>정렬</span>
        <span className='body-2 text-green'>{defaultSort.label}</span>
        <StaticFilteringIcon className='mt-0.5 h-[7px] w-[7px]' />
      </button>
      <Modal
        radius='none'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement='top'
        classNames={{ base: 'm-0', footer: 'p-0 mx-5 mt-4 mb-8', body: 'p-0 mx-5 my-[50px] overflow-x-hidden' }}
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
                <span className='title-1 absolute'>정렬</span>
              </ModalHeader>
              <ModalBody>
                <ScrollShadow orientation='horizontal' hideScrollBar className='flex justify-center'>
                  <div className='flex gap-x-4'>
                    {SORT_OPTIONS.map(({ key, label }, index) => (
                      <button
                        key={key}
                        className={classNames(key === selectedSort.key && 'text-green', 'title-1 shrink-0')}
                        onClick={() => handleSortClick(index)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter>
                <button onClick={handleSortsubmit} className='bg-green title-1 w-full rounded-3xl py-4 text-center text-white'>
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
