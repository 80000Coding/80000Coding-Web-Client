import { IconSource } from '@80000coding/web-icons'
import cn from 'classnames'
import React from 'react'

import { ButtonColorVariant, ButtonSize, ButtonStyleVariant } from './Button.types'

type Props = {
  text?: string
  variant?: ButtonStyleVariant
  diabled?: boolean
  warning?: boolean
  loading?: boolean
  size?: ButtonSize
  color?: ButtonColorVariant
  leftIcon?: IconSource
  rightIcon?: IconSource
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const getColorClass = (attr: string, color: ButtonColorVariant) => {
  const colorMap = {
    green: 'green',
    red: 'red',
    blue: 'blue',
    violet: 'violet',
    lightGreen: 'green-light',
    lightRed: 'red-light',
    lightBlue: 'blue-light',
    lightViolet: 'violet-light',
    darkGreen: 'green-dark',
    darkRed: 'red-dark',
    darkBlue: 'blue-dark',
    darkViolet: 'violet-dark',
  }
  return `${attr}-${colorMap[color]}`
}

const Button = ({
  text,
  variant = 'primary',
  disabled = false,
  warning = false,
  loading = false,
  size = 'M',
  color = 'green',
  leftIcon,
  rightIcon,
  onClick,
  className,
  children,
  ...rest
}: Props) => {
  const buttonColor = warning ? 'darkRed' : color

  const sizeToClass = {
    S: 'rounded-[16px] h-[32px] box-border note-3',
    M: 'rounded-[24px] h-[48px] box-border body-1',
    L: 'rounded-[26px] h-[52px] box-border title-1',
  }
  const variantToClass = {
    primary: `w-full text-white box-border ${getColorClass('bg', buttonColor)}`,
    outline: `w-full ${getColorClass('text', buttonColor)} border ${getColorClass('border', buttonColor)} bg-transparent`,
  }

  const disabledStyleVariantToClass = {
    primary: `disabled:bg-gray-200`,
    outline: `disabled:text-gray-200 disabled:border-gray-200`,
  }

  const IconComponent = ({ Icon }: { Icon: IconSource | undefined }) => {
    if (!Icon) return null
    return (
      <div className='flex h-[32px] w-[32px] items-center justify-center'>
        <Icon />
      </div>
    )
  }

  return (
    <button
      className={cn(sizeToClass[size], variantToClass[variant], disabled && disabledStyleVariantToClass[variant], className)}
      {...rest}
      disabled={disabled}
      onClick={onClick}
    >
      <div className='align-center flex flex-row items-center justify-center gap-[2px]'>
        <IconComponent Icon={leftIcon} />
        <span>{text ?? children}</span>
        <IconComponent Icon={rightIcon} />
      </div>
    </button>
  )
}
export default Button

Button.displayName = 'Button'
