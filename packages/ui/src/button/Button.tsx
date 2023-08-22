import cn from 'classnames'
import React from 'react'

import { ButtonColorVariant, ButtonSize, ButtonStyleVariant } from './Button.types'

type Props = {
  text: string
  variant: ButtonStyleVariant
  diabled?: boolean
  warning?: boolean
  loading?: boolean
  size?: ButtonSize
  color: ButtonColorVariant
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const backgroundColors = {
  green: 'bg-green',
  red: 'bg-red',
  blue: 'bg-blue',
  violet: 'bg-violet',
  lightGreen: 'bg-green-light',
  lightRed: 'bg-red-light',
  lightBlue: 'bg-blue-light',
  lightViolet: 'bg-violet-light',
  darkGreen: 'bg-green-dark',
  darkRed: 'bg-red-dark',
  darkBlue: 'bg-blue-dark',
  darkViolet: 'bg-violet-dark',
}

const borderColors = {
  green: 'border-green',
  red: 'border-red',
  blue: 'border-blue',
  violet: 'border-violet',
  lightGreen: 'border-green-light',
  lightRed: 'border-red-light',
  lightBlue: 'border-blue-light',
  lightViolet: 'border-violet-light',
  darkGreen: 'border-green-dark',
  darkRed: 'border-red-dark',
  darkBlue: 'border-blue-dark',
  darkViolet: 'border-violet-dark',
}

const textColors = {
  green: 'text-green',
  red: 'text-red',
  blue: 'text-blue',
  violet: 'text-violet',
  lightGreen: 'text-green-light',
  lightRed: 'text-red-light',
  lightBlue: 'text-blue-light',
  lightViolet: 'text-violet-light',
  darkGreen: 'text-green-dark',
  darkRed: 'text-red-dark',
  darkBlue: 'text-blue-dark',
  darkViolet: 'text-violet-dark',
}

const getColor = (color: ButtonColorVariant, warning: boolean) => {
  return warning ? 'darkRed' : color
}

const Button = ({
  text,
  variant,
  disabled = false,
  warning = false,
  loading = false,
  size = 'M',
  color,
  leftIcon,
  rightIcon,
  onClick,
  className,
  children,
  ...rest
}: Props) => {
  const sizeToClass = {
    S: 'rounded-[16px] w-[100%] h-[32px] box-border',
    M: 'rounded-[24px] w-[100%] h-[48px] box-border',
    L: 'rounded-[26px] w-[100%] h-[52px] box-border',
  }
  const variantToClass = {
    primary: `w-[100%] text-white box-border ${backgroundColors[getColor(color, warning)]}`,
    outline: `w-[100%] ${textColors[getColor(color, warning)]} border ${borderColors[getColor(color, warning)]} bg-transparent`,
  }

  const disabledStyleVariantToClass = {
    primary: `disabled:bg-gray-200`,
    outline: `disabled:text-gray-200 disabled:border-gray-200`,
  }

  const textStyles = () => {
    switch (size) {
      case 'L':
        return 'Title-1'
      case 'M':
        return 'Body-1'
      case 'S':
        return 'Note-3'
      default:
        return 'Body-1'
    }
  }

  return (
    <button
      className={cn(sizeToClass[size], variantToClass[variant], disabled && disabledStyleVariantToClass[variant], className)}
      {...rest}
      disabled={disabled}
    >
      {/* left-icon은 여기로 */}
      <div className={cn(textStyles())}>{text?.length > 0 ? text : children}</div>
      {/* right-icon은 여기로 */}
    </button>
  )
}
export default Button

Button.displayName = 'Button'
