import { icons } from '@80000coding/web-icons'

import { categoryIconColor, categoryIconDisplayName } from './CategoryIcons.const'
import { CategoryIcon, CategoryIconNames } from './CategoryIcons.type'

export const categoryIcons = Object.entries(icons)
  .filter(([key]) => key.startsWith('category'))
  .reduce(
    (acc, [key, value]) => {
      const categoryIconName = key.replace('category-', '') as CategoryIconNames

      acc[categoryIconName] = {
        displayName: categoryIconDisplayName[categoryIconName],
        bgColor: categoryIconColor[categoryIconName].bg,
        fgColor: categoryIconColor[categoryIconName].fg,
        source: value,
      }
      return acc
    },
    {} as Record<CategoryIconNames, CategoryIcon>,
  )
