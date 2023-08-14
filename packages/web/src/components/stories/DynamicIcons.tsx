import { DynamicAddIcon } from '@80000coding/web-icons'
import React from 'react'

type Props = {
  width?: string
  height?: string
  color?: 'green' | 'darkgreen' | 'blue' | 'violet' | 'red' | 'black'
}
const DynamicIcons = ({ width, height, color = 'blue' }: Props) => {
  const iconColor = {
    green: 'text-green',
    darkgreen: 'text-green-dark',
    blue: 'text-blue',
    violet: 'text-violet',
    red: 'text-red',
    black: 'text-black',
  }
  return <DynamicAddIcon width={width} height={height} className={iconColor[color]} />
}

export default DynamicIcons
