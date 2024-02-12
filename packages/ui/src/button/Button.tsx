import cn from 'classnames'
import React from 'react'

type ButtonStyleVariant = 'primary' | 'secondary' | 'warning' | 'custom'
type ButtonSize = 'full' | 'half' | 'alert-full' | 'alert-half' | 'alert-small'

type Props = {
  text?: string
  variant?: ButtonStyleVariant
  loading?: boolean
  size?: ButtonSize
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  text,
  variant = 'primary',
  loading = false, // @TODO 로딩 스타일 추가
  size = 'full',
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: Props) => {
  const sizeToClass = {
    full: 'w-[350px] h-[52px]',
    half: 'w-[170px] h-[52px]',
    'alert-full': 'w-[290px] h-[50px]',
    'alert-half': 'w-[140px] h-[50px]',
    'alert-small': 'w-[80px] h-[50px]',
  }

  const variantToClass = {
    primary: 'bg-green text-white dark:bg-green dark:text-white', // @TODO dark:text 색상 조절 필요
    secondary: 'bg-gray-100 text-white dark:bg-gray-700 dark:text-white', // @TODO dark:text 색상 조절 필요
    warning: 'bg-red text-white dark:bg-red dark:text-white', // @TODO dark:text 색상 조절 필요
    custom: '',
  }

  const disabledClass = 'disabled:bg-gray-200 disabled:dark:bg-gray-600 disabled:text-gray-300 disabled:dark:text-gray-500'

  return (
    <button
      className={cn(
        'body-1 flex items-center justify-center rounded-[16px]',
        sizeToClass[size],
        variantToClass[variant],
        disabledClass,
        className,
      )}
      {...rest}
    >
      {/* @TODO 아이콘 위치 이렇게하면 안됨 postion으로 조절하거나 grid 사용, flex로 하면 왼쪽 아이콘이 생기거나 없어질 때마다 가운데 텍스트가 이동함*/}
      <div className='align-center flex flex-row items-center justify-center gap-[2px]'>
        {leftIcon}
        <span className='overflow-hidden text-ellipsis whitespace-nowrap'>{text ?? children}</span>
        {rightIcon}
      </div>
    </button>
  )
}
export default Button

Button.displayName = 'Button'
