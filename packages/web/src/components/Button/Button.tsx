import cn from 'classnames'
import React from 'react'

import Text from '../Text/Text'

type ButtonStyleVariant = 'primary' | 'outline'
type ButtonColorVariant = 'green' | 'red' | 'blue' | 'violet'
type ButtonSize = 'xl' | 'default' | 'lg' 

type Props = {
  styleVariant: ButtonStyleVariant
  colorVariant: ButtonColorVariant
  size?: ButtonSize
  loading?: boolean
  disabled: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const borderColors = {
  'green': 'border-green',
  'red': 'border-red',
  'blue': 'border-blue',
  'violet': 'border-violet',
}

const textColors = {
  'green': 'text-green',
  'red': 'text-red',
  'blue': 'text-blue',
  'violet': 'text-violet',
}

const Button = ({styleVariant, colorVariant, size = 'xl', loading, disabled, className, children, ...rest}: Props) => {
  const sizeToClass = {
    'xl': 'rounded-[26px] w-[100%] h-[52px] box-border',
    'default': 'rounded-[24px] w-[100%] h-[48px] box-border',
    'lg': 'rounded-[16px] w-[100%] h-[32px] box-border',
  }
  const styleVariantToClass = {
    'primary': `rounded-[26px] w-[100%] h-[52px] text-white box-border bg-${colorVariant}`,
    'outline': `rounded-[26px] w-[100%] h-[52px] ${textColors[colorVariant]} border ${borderColors[colorVariant]} bg-transparent`,
  }

  const disabledStyleVariantToClass = {
    'primary': `disabled:bg-gray-200`,
    'outline': `disabled:text-gray-200 disabled:border-gray-200`,
  }


  const textStyles = () => {
    switch (size) {
      case 'xl':
        return 'button-1'
      case 'default':
        return 'button-2'
      case 'lg':
        return 'button-3'
      default:
        return 'button-1'
    }
  }

  // const colorVariantToClass = {
  //   'green': 'bg-green',
  //   'red': 'bg-red',
  //   'blue': 'bg-blue',
  //   'violet': 'bg-violet',
  // }

  return (
    <button className={cn(sizeToClass[size], styleVariantToClass[styleVariant], disabled&&disabledStyleVariantToClass[styleVariant], className)} {...rest} disabled={disabled}>
      <Text type={textStyles()}>{children}</Text>
    </button>
  )

}
export default Button