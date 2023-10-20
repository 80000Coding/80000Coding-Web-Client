import { DynamicBackIcon, DynamicDeleteIcon, DynamicSearchIcon } from '@80000coding/web-icons'
import { Input as Input$1 } from '@nextui-org/react'
import { Dispatch, SetStateAction, useState } from 'react'

export type InputSearchProps = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  isBackBtn?: boolean
} & Omit<React.ComponentProps<typeof Input$1>, 'classNames'>

export function InputSearch({ value, setValue, isInvalid = false, isBackBtn = false, label, ...rest }: InputSearchProps) {
  // const [value, setValue] = useState('')

  const onClear = () => {
    setValue('')
  }

  const onSearch = () => {
    console.log('search')
  }

  const onClickGoBack = () => {
    console.log('Go Back!')
  }

  const [isFocus, setIsFocus] = useState(false)

  return (
    <Input$1
      labelPlacement='outside'
      value={value}
      label={label}
      startContent={isBackBtn && <DynamicBackIcon onClick={onClickGoBack} className='text-gray-500' />}
      endContent={
        <div className='flex-column flex'>
          {value !== '' && <DynamicDeleteIcon className='text-gray-500' onClick={onClear}></DynamicDeleteIcon>}
          <DynamicSearchIcon className='text-green ml-[16px]' onClick={onSearch}></DynamicSearchIcon>
        </div>
      }
      onFocusChange={(e) => {
        setIsFocus(e)
      }}
      onValueChange={setValue}
      isInvalid={isInvalid}
      type='text'
      placeholder='검색어를 입력하세요'
      radius='full'
      classNames={{
        label: ['body-2 text-gray-600'],
        description: ['px-0 pb-0 pt-3 caption-2'],
        input: ['!bg-white', 'text-black', 'placeholder:text-gray-300', 'body-3', 'h-100'],
        innerWrapper: [],
        inputWrapper: [
          'items-start',
          '!bg-white',
          'border',
          'hover:border-green',
          'focus-within:border-green',
          '!cursor-text',
          'rounded-[20px]',
          'px-[20px]',
          'py-[13px]',
        ],
      }}
      {...rest}
    />
  )
}
