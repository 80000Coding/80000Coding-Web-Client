import { DynamicSearchIcon, StaticCloseIcon } from '@80000coding/web-icons'
import { Input as Input$1 } from '@nextui-org/react'
import { Dispatch, SetStateAction } from 'react'

export type InputSearchProps = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
} & Omit<React.ComponentProps<typeof Input$1>, 'classNames'>

export function InputSearch({ value, setValue, isInvalid = false, ...rest }: InputSearchProps) {
  // const [value, setValue] = useState('')
  const onClear = () => {
    value = ''
    console.log('click')
  }
  return (
    <Input$1
      labelPlacement='outside'
      value={value}
      endContent={
        <div className='flex-column flex'>
          {value !== '' && <StaticCloseIcon onClick={onClear}></StaticCloseIcon>}
          <DynamicSearchIcon></DynamicSearchIcon>
        </div>
      }
      onValueChange={setValue}
      isInvalid={isInvalid}
      type='text'
      placeholder='검색어를 입력하세요'
      radius='full'
      classNames={{
        label: ['mx-[12px]', 'body-2'],
        description: ['mx-[12px]', 'caption-2'],
        input: ['!bg-white', 'text-black', 'placeholder:text-gray-300', 'body-3', 'h-100'],
        innerWrapper: [],
        inputWrapper: ['items-start', '!bg-white', 'border', '!cursor-text', 'rounded-[20px]', 'px-[20px]', 'py-[13px]'],
      }}
    />
  )
}
