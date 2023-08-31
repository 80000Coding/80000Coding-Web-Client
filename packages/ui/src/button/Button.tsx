import cn from 'classnames'
import React from 'react'

type ButtonStyleVariant = 'primary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type Props = {
  text?: string
  variant?: ButtonStyleVariant
  warning?: boolean
  loading?: boolean
  size?: ButtonSize
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  text,
  variant = 'primary',
  warning = false,
  loading = false,
  size = 'md',
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: Props) => {
  const sizeToClass = {
    sm: 'rounded-[16px] h-[32px] note-3',
    md: 'rounded-[24px] h-[48px] body-1',
    lg: 'rounded-[26px] h-[52px] title-1',
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
        'w-full px-[24px]',
        sizeToClass[size],
        variantToClass[variant],
        disabledStyleVariantToClass[variant],
        warning && warningStyleVariantToClass[variant],
        className,
      )}
      {...rest}
    >
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
