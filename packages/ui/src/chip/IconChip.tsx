import cn from 'classnames'
import { ComponentProps } from 'react'

import Chip from './Chip'
import ImsiSVG from './TempIcon'
import { CategoryIconNames, categoryIcons } from '../icon'

type IconChipProps = {
  categoryIconNames?: CategoryIconNames
  erasable?: boolean
} & ComponentProps<typeof Chip>

const IconChip = ({ categoryIconNames = 'category-AppleDeveloperAcademy', erasable, ...rest }: IconChipProps) => {
  return (
    <Chip
      className={cn('flex items-center gap-[6px] bg-white py-[6px] pl-[8px] pr-[12px]')}
      style={{ boxShadow: `inset 0 0 0 1px ${categoryIcons[categoryIconNames].color}` }}
      {...rest}
    >
      {categoryIcons[categoryIconNames].source({ className: 'rounded-full w-[20px] h-[20px]' })}
      <p className='caption-1 text-gray-700'>{categoryIcons[categoryIconNames].displayName}</p>
      {erasable && <ImsiSVG />}
    </Chip>
  )
}

export default IconChip
