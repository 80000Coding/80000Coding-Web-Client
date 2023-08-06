import cn from 'classnames'
import React from 'react'

import Text from '../Text/Text'

// type ButtonStyleVariant = 'primary' | 'outline'
type ButtonStyleVariant =  'outline'
type ButtonColorVariant = 'green' | 'red' | 'blue' | 'violet'
type ButtonSize = 'xl'

type Props = {
  styleVariant: ButtonStyleVariant
  colorVariant: ButtonColorVariant
  size?: ButtonSize
  loading?: boolean
  disabled: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({styleVariant, colorVariant, size, loading, disabled, className, children, ...rest}: Props) => {
  const styleVariantToClass = {
    // 'primary': `rounded-[26px] w-[100%] h-[52px] text-white box-border bg-${colorVariant}`,
    'outline': `rounded-[26px] w-[100%] h-[52px] text-${colorVariant} border border-${colorVariant} bg-transparent`,
  }


  const disabledclassName = disabled ? 'bg-gray-200' : ''

  // const colorVariantToClass = {
  //   'green': 'bg-green',
  //   'red': 'bg-red',
  //   'blue': 'bg-blue',
  //   'violet': 'bg-violet',
  // }

  return (
    <button className={cn(styleVariantToClass[styleVariant], disabledclassName, className)} {...rest} disabled={disabled}>
      <Text type={'button-1'}>{children}</Text>
    </button>
  )

}
export default Button