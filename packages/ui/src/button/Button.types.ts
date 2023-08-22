const ButtonStyleVariant = {
  Primary: 'primary',
  Outlint: 'outline',
} as const

export const ButtonColorVariant = {
  Green: 'green',
  Red: 'red',
  Blue: 'blue',
  Violet: 'violet',
  LightGreen: 'lightGreen',
  LightRed: 'lightRed',
  LightBlue: 'lightBlue',
  LightViolet: 'lightViolet',
  DarkGreen: 'darkGreen',
  DarkRed: 'darkRed',
  DarkBlue: 'darkBlue',
  DarkViolet: 'darkViolet',
} as const

const ButtonSize = {
  S: 'S',
  M: 'M',
  L: 'L',
} as const

export type ButtonStyleVariant = typeof ButtonStyleVariant[keyof typeof ButtonStyleVariant]
export type ButtonColorVariant = typeof ButtonColorVariant[keyof typeof ButtonColorVariant]
export type ButtonSize = typeof ButtonSize[keyof typeof ButtonSize]

