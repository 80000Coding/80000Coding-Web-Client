import { DynamicClearIcon } from '@80000coding/web-icons'
import cn from 'classnames'

import { CategoryIconNames, categoryIcons } from '../icon'

type IconChipProps = {
  categoryIconNames?: CategoryIconNames
  deletable?: boolean
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>

const IconChip = ({ deletable = false, categoryIconNames = 'AppleDeveloperAcademy', className, ...rest }: IconChipProps) => {
  const colorClass = 'text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-[1px] border-gray-200 dark:border-gray-700'

  const sizeClass = deletable ? 'py-[6px] px-[6px]' : 'py-[6px] pr-[12px] pl-[6px]'

  const iconClass = 'w-[20px] h-[20px]'

  return (
    <span className={cn('flex h-[32px] items-center gap-[8px] rounded-[16px]', sizeClass, colorClass, className)} {...rest}>
      {categoryIcons[categoryIconNames].source({ className: iconClass })}
      {categoryIcons[categoryIconNames].displayName}
      {deletable && <DynamicClearIcon className='text-gray-300 dark:text-gray-500' />}
    </span>
  )
}

export default IconChip
