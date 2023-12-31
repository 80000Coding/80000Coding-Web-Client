import { StaticConfirmIcon } from '@80000coding/web-icons'
import { Input as Input$1 } from '@nextui-org/react'
import { Dispatch, SetStateAction, useState } from 'react'

export type InputProps = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  displayLength?: boolean
  isDescription?: boolean
  isCorrect?: boolean
} & Omit<React.ComponentProps<typeof Input$1>, 'classNames'>

export function Input({
  value,
  setValue,
  isInvalid = false,
  placeholder = ' ',
  errorMessage: errorMessage$1 = 'Please enter a valid value',
  displayLength = true,
  description: description$1 = 'Please enter a value',
  isDescription = true,
  isCorrect = false,
  label,
  ...rest
}: InputProps) {
  const [isFocus, setIsFocus] = useState(false)
  const description = displayLength ? (
    <>
      <span className={isCorrect ? 'text-green' : ''}>{description$1}</span>
      <span>{(value?.length || 0) + '/20'}</span>
    </>
  ) : (
    description$1
  )

  const errorMessage = displayLength ? (
    <>
      <span>{errorMessage$1}</span>
      <span className='text-gray-400'>{(value?.length || 0) + '/20'}</span>
    </>
  ) : (
    errorMessage$1
  )

  return (
    <Input$1
      /* strings */
      value={value}
      label={label}
      placeholder={placeholder}
      description={isDescription && description}
      errorMessage={isInvalid && errorMessage}
      /* status */
      isInvalid={isInvalid}
      isClearable={true}
      /* actions */
      onValueChange={setValue}
      onFocusChange={(e) => {
        setIsFocus(e)
      }}
      /* styles */
      type='text'
      radius='full'
      labelPlacement='outside'
      endContent={isCorrect && !isFocus && <StaticConfirmIcon className='pointer-events-none' />}
      classNames={{
        label: ['body-2 text-gray-600 pb-3'],
        description: 'w-full text-gray-400 caption-2 flex justify-between',
        errorMessage: 'w-full text-red-warning caption-2 flex justify-between',
        input: ['!bg-white', 'text-black', 'placeholder:text-gray-300', 'body-3', 'h-100'],
        innerWrapper: [],
        inputWrapper: [
          'items-center',
          '!bg-white',
          'border',
          isInvalid ? 'border-red-warning' : isCorrect ? 'border-green' : 'border-gray-300',
          isInvalid ? 'hover:border-red-warning' : 'hover:border-green',
          isInvalid ? 'focus-within:border-red-warning' : 'focus-within:border-green',
          '!cursor-text',
          'rounded-[20px]',
          'px-[20px]',
          'py-[13px]',
        ],
        helperWrapper: 'px-0 pb-0 pt-3',
      }}
      {...rest}
    />
  )
}
