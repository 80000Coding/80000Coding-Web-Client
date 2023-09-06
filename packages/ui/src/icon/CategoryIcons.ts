import { icons } from '@80000coding/web-icons'

import { categoryIconColor, categoryIconDisplayName } from './CategoryIcons.const'
import { CategoryIcon, CategoryIconNames, CategoryIconNamesWithoutRounded } from './CategoryIcons.type'

export const categoryIcons = Object.entries(icons)
  .filter(([key]) => key.startsWith('category'))
  .reduce(
    (acc, [key, value]) => {
      const categoryIconName = key.replace('category-', '') as CategoryIconNames
      const extractedCategoryIconName = categoryIconName.replace('-rounded', '') as CategoryIconNamesWithoutRounded
      acc[categoryIconName] = {
        displayName: categoryIconDisplayName[extractedCategoryIconName],
        bgColor: categoryIconColor[extractedCategoryIconName].bg,
        fgColor: categoryIconColor[extractedCategoryIconName].fg,
        source: value,
      }
      return acc
    },
    {} as Record<CategoryIconNames, CategoryIcon>,
  )
