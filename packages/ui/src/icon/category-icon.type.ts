import type { IconName, IconSource } from '@80000coding/web-icons'

export type CategoryIconNames = Extract<IconName, `category-${string}`>
export type CategoryIcon = {
  displayName: string
  color: string
  source: IconSource
}
