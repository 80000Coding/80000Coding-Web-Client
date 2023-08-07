import type { ToggleSliderColor, ToggleSliderSize } from './Toggle.type'

export const toggleSliderSize: ToggleSliderSize = {
  sm: 'h-[20px] w-[34px] after:h-[16px] after:w-[16px] after:top-[2px] after:left-[2px]',
  md: 'h-[28px] w-[52px] after:h-[24px] after:w-[24px] after:top-[2px] after:left-[2px]',
  lg: 'h-[36px] w-[68px] after:h-[32px] after:w-[32px] after:top-[2px] after:left-[2px]',
}

export const toggleSliderColor: ToggleSliderColor = {
  green: 'peer-checked:bg-green',
  darkgreen: 'peer-checked:bg-darkgreen',
  blue: 'peer-checked:bg-blue',
  violet: 'peer-checked:bg-violet',
  red: 'peer-checked:bg-red',
}
