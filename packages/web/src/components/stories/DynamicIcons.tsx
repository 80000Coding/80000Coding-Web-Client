import { DynamicAddIcon } from '@80000coding/web-icons'
import React from 'react'

type Props = {
  size?: 'sm' | 'md' | 'lg'
  color?: 'green' | 'darkgreen' | 'blue' | 'violet' | 'red' | 'black'
}
const DynamicIcons = ({ size = 'md', color = 'blue' }: Props) => {
  const iconColor = {
    green: 'text-green',
    darkgreen: 'text-green-dark',
    blue: 'text-blue',
    violet: 'text-violet',
    red: 'text-red',
    black: 'text-black',
  }
  const iconSize = {
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
  }
  return <DynamicAddIcon  className={iconColor[color] + " " + iconSize[size]} />
}

export default DynamicIcons
