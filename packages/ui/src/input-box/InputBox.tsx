import { DynamicInputDeleteIcon } from '@80000coding/web-icons'
import classNames from 'classnames'
import React from 'react'

type Props = {
  text?: string
  placeholder?: string
  diabled?: boolean
  typingError?: boolean
  onChangeValue?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>

const InputBox = ({ text, placeholder, disabled = false, typingError = true, onChangeValue, className, children, ...rest }: Props) => {
  return (
    <div
      className={classNames(
        'body-3 focus-within:border-green box-border flex w-full items-center rounded-[20px] border-[1px] border-gray-300 bg-white	px-[20px] py-[10px] ',
      )}
    >
      <input
        value={text}
        className='body-3 box-border w-full focus:outline-none	'
        placeholder={placeholder}
        disabled={disabled}
        // onChange={onChangeValue}
      ></input>
      <div className='h-[14px] w-[14px]'>
        <DynamicInputDeleteIcon className='text-gray-600'></DynamicInputDeleteIcon>
      </div>
    </div>
  )
}
export default InputBox

// InputBox.displayName = 'InputBox'
