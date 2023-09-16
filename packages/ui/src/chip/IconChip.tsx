import cn from 'classnames'

import { CategoryIconNames, categoryIcons } from '../icon'

type IconChipProps = {
  size?: 'sm' | 'md'
  categoryIconNames?: CategoryIconNames
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>

const IconChip = ({ size = 'sm', categoryIconNames = 'AppleDeveloperAcademy-rounded', className, ...rest }: IconChipProps) => {
  const chipClassBySize = {
    sm: 'caption-3 pl-[23px] pr-[10px] py-[5px] bg-white',
    md: 'caption-1 pl-[34px] pr-[12px] py-[10.5px] bg-gray-100',
  }

  const iconClassBySize = {
    sm: 'w-[17px] h-[17px] left-[2px] top-[2px]',
    md: 'w-[20px] h-[20px] left-[8px] top-[6px]',
  }
  const chipStyle = { boxShadow: `inset 0 0 0 1px ${categoryIcons[categoryIconNames].bgColor}` }

  return (
    <span className={cn('relative rounded-full text-gray-700', chipClassBySize[size], className)} style={chipStyle} {...rest}>
      {categoryIcons[categoryIconNames].source({ className: 'absolute ' + iconClassBySize[size] })}
      {categoryIcons[categoryIconNames].displayName}
    </span>
  )
}

export default IconChip
