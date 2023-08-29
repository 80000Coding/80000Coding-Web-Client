import { icons } from '@80000coding/web-icons'

import { categoryIconColor, categoryIconDisplayName } from './category-icon.const'
import { CategoryIcon, CategoryIconNames } from './category-icon.type'

export const categoryIcons = Object.entries(icons)
  .filter(([key]) => key.startsWith('category'))
  .reduce(
    (acc, [key, value]) => {
      const typesafeKey = key as CategoryIconNames
      acc[typesafeKey] = {
        displayName: categoryIconDisplayName[typesafeKey],
        color: categoryIconColor[typesafeKey],
        source: value,
      }
      return acc
    },
    {} as Record<CategoryIconNames, CategoryIcon>,
  )
