import cn from 'classnames'
import React from 'react'

import { ButtonSize, ButtonStyleVariant } from './Button.types'

type Props = {
  text?: string
  variant?: ButtonStyleVariant
  diabled?: boolean
  warning?: boolean
  loading?: boolean
  size?: ButtonSize
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  text,
  variant = 'primary',
  disabled = false,
  warning = false,
  loading = false,
  size = 'M',
  leftIcon,
  rightIcon,
  onClick,
  className,
  children,
  ...rest
}: Props) => {
  const sizeToClass = {
    S: 'rounded-[16px] h-[32px] note-3',
    M: 'rounded-[24px] h-[48px] body-1',
    L: 'rounded-[26px] h-[52px] title-1',
  }

  const variantToClass = {
    primary: `text-white`,
    outline: `border bg-transparent`,
  }

  const disabledStyleVariantToClass = {
    primary: `disabled:bg-gray-200`,
    outline: `disabled:text-gray-200 disabled:border-gray-200`,
  }

  const warningStyleVariantToClass = {
    primary: `bg-red-dark`,
    outline: `border-red-dark text-red-dark`,
  }

  return (
    <button
      className={cn(
        'w-full',
        sizeToClass[size],
        variantToClass[variant],
        disabled && disabledStyleVariantToClass[variant],
        warning && warningStyleVariantToClass[variant],
        className,
      )}
      {...rest}
      disabled={disabled}
      onClick={onClick}
    >
      <div className='align-center flex flex-row items-center justify-center gap-[2px]'>
        {/* { props로 React.ReactNode 받으면 어떻게 렌더링 시켜야하지? } */}
        {leftIcon}
        <span>{text ?? children}</span>
        {rightIcon}
      </div>
    </button>
  )
}
export default Button

Button.displayName = 'Button'
