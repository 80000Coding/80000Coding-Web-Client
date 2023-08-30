import cn from 'classnames'
import { ComponentProps } from 'react'

import Chip from './Chip'
import ImsiSVG from './TempIcon'
import { CategoryIconNames, categoryIcons } from '../icon'

type IconChipProps = {
  categoryIconNames?: CategoryIconNames
  erasable?: boolean
} & ComponentProps<typeof Chip>

const IconChip = ({ categoryIconNames = 'category-AppleDeveloperAcademy', erasable, variant = 'outline', ...rest }: IconChipProps) => {
  const isOutline = variant === 'outline'
  const padding = isOutline ? ' py-[6px] pl-[8px] pr-[12px]' : 'py-[2px] pl-[2px] pr-[12px]'
  const iconSize = isOutline ? 'w-[20px] h-[20px]' : 'w-[17px] h-[17px]'
  const textColor = isOutline ? 'text-gray-700' : categoryIcons[categoryIconNames].fgColor === '#ffffff' ? 'text-white' : 'text-black'
  const chipStyle = isOutline
    ? { boxShadow: `inset 0 0 0 1px ${categoryIcons[categoryIconNames].bgColor}` }
    : { backgroundColor: categoryIcons[categoryIconNames].bgColor }
  return (
    <Chip className={cn('flex items-center gap-[6px] bg-white', padding)} style={chipStyle} {...rest}>
      {categoryIcons[categoryIconNames].source({ className: 'rounded-full ' + iconSize })}
      <p className={cn('caption-1', textColor)}>{categoryIcons[categoryIconNames].displayName}</p>
      {isOutline && erasable && <ImsiSVG />}
    </Chip>
  )
}

export default IconChip
