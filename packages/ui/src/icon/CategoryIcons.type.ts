import type { IconName, IconSource } from '@80000coding/web-icons'

export type CategoryIconNames = Extract<IconName, `category-${string}`> extends `category-${infer T}` ? T : never
export type CategoryIconNamesWithoutRounded = CategoryIconNames extends `${infer T}` ? (T extends `${infer U}-rounded` ? U : T) : never

export type CategoryIcon = {
  displayName: string
  bgColor: string
  fgColor: string
  source: IconSource
}
