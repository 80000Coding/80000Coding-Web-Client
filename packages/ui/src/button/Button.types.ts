const ButtonStyleVariant = {
  Primary: 'primary',
  Outlint: 'outline',
} as const

const ButtonSize = {
  S: 'S',
  M: 'M',
  L: 'L',
} as const

export type ButtonStyleVariant = (typeof ButtonStyleVariant)[keyof typeof ButtonStyleVariant]
export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize]
