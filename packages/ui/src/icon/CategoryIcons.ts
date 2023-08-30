import { icons } from '@80000coding/web-icons'

import { categoryIconColor, categoryIconDisplayName } from './CategoryIcons.const'
import { CategoryIcon, CategoryIconNames } from './CategoryIcons.type'

export const categoryIcons = Object.entries(icons)
  .filter(([key]) => key.startsWith('category'))
  .reduce(
    (acc, [key, value]) => {
      const typesafeKey = key as CategoryIconNames
      acc[typesafeKey] = {
        displayName: categoryIconDisplayName[typesafeKey],
        bgColor: categoryIconColor[typesafeKey].bg,
        fgColor: categoryIconColor[typesafeKey].fg,
        source: value,
      }
      return acc
    },
    {} as Record<CategoryIconNames, CategoryIcon>,
  )
