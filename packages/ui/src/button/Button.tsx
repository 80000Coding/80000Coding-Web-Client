import cn from 'classnames'
import React from 'react'

import colorBase from '../colorBase'

type ButtonStyleVariant = 'primary' | 'secondary' | 'warning' | 'symbol'
type ButtonSize = 'full' | 'half' | 'small'

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
  size = 'full',
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: Props) => {
  const buttonBase = {
    'w-full': true,
    'px-[20px]': true,
    'py-[14px]': true,
    'rounded-[16px]': true,
    'body-1': true,
  }

  return (
    <button className={cn(variant, buttonBase, colorBase, className)} {...rest}>
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
