import type { ToggleSliderColor, ToggleSliderSize } from './Toggle.type'

export const toggleSliderSize: ToggleSliderSize = {
  sm: 'h-[20px] w-[36px] after:h-[16px] after:w-[16px] after:top-1/2 after:left-[2px] after:-translate-y-1/2 peer-checked:after:translate-x-[16px]',
  md: 'h-[24px] w-[50px] after:h-[18px] after:w-[18px] after:top-1/2 after:left-[3px] after:-translate-y-1/2 peer-checked:after:translate-x-[26px]',
  lg: 'h-[28.8px] w-[60px] after:h-[21.6px] after:w-[21.6px] after:top-1/2 after:left-[4px] after:-translate-y-1/2 peer-checked:after:translate-x-[30.4px]',
}

export const toggleSliderColor: ToggleSliderColor = {
  green: 'peer-checked:bg-green',
  darkgreen: 'peer-checked:bg-darkgreen',
  blue: 'peer-checked:bg-blue',
  violet: 'peer-checked:bg-violet',
  red: 'peer-checked:bg-red',
}
