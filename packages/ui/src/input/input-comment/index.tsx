import { Textarea as TextArea$1 } from '@nextui-org/react'
import { Dispatch, SetStateAction, useState } from 'react'

export type InputCommentProps = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  displayLength?: boolean
  isDescription?: boolean
  isCorrect?: boolean
} & Omit<React.ComponentProps<typeof TextArea$1>, 'classNames'>

export function InputComment({
  value,
  setValue,
  isInvalid = false,
  placeholder = '댓글을 입력해주세요',
  isCorrect = false,
  label,
  ...rest
}: InputCommentProps) {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <TextArea$1
      /* strings */
      value={value}
      label={label}
      placeholder={placeholder}
      /* status */
      isInvalid={isInvalid}
      isClearable={isFocus || !isCorrect}
      /* actions */
      onValueChange={setValue}
      onFocusChange={(e) => {
        setIsFocus(e)
      }}
      /* styles */
      maxRows={3}
      minRows={1}
      type='text'
      radius='full'
      labelPlacement='outside'
      classNames={{
        label: ['body-2 text-gray-600'],
        input: ['!bg-white', 'text-black', 'placeholder:text-gray-300', 'body-3', 'px-[0px]', 'py-[0]'],
        innerWrapper: [],
        inputWrapper: [
          'items-start',
          '!bg-white',
          'border',
          isInvalid ? 'border-red-warning' : isCorrect ? 'border-green' : 'border-gray-300',
          isInvalid ? 'hover:border-red-warning' : 'hover:border-green',
          isInvalid ? 'focus-within:border-red-warning' : 'focus-within:border-green',
          '!cursor-text',
          'rounded-[20px]',
          'px-[20px]',
          'py-[10px]',
        ],
      }}
      {...rest}
    />
  )
}
