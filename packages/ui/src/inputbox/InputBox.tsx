import classNames from 'classnames'
import React from 'react'

type Props = {
  textValue?: string
  placeholder?: string
  diabled?: boolean
  typingError?: boolean
  onChangeValue?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>

const InputBox = ({
  textValue,
  placeholder,
  disabled = false,
  typingError = false,
  onChangeValue,
  className,
  children,
  ...rest
}: Props) => {
  return (
    <div
      className={classNames(
        'body-3 focus-within:border-green warning:focus-within:border-red box-border flex w-full items-center rounded-[20px] border-[1px] border-gray-300 bg-white	px-[20px] py-[10px] ',
      )}
    >
      <input
        value={textValue}
        className='body-3 box-border w-full focus:outline-none	'
        placeholder={placeholder}
        disabled={disabled}
      ></input>
    </div>
  )
}
export default InputBox

// InputBox.displayName = 'InputBox'
