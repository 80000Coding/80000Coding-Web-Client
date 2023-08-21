export type ToggleSize = 'sm' | 'md' | 'lg'
export type ToggleColor = 'green' | 'darkgreen' | 'blue' | 'violet' | 'red'

export type ToggleSliderColor = Record<ToggleColor, string>
export type ToggleSliderSize = Record<ToggleSize, string>

export type ToggleControlProps = {
  isChecked?: boolean
  onToggleClick?: (isChecked: boolean) => void
}
export type ToggleDefaultProps = Omit<React.HTMLAttributes<HTMLLabelElement>, 'color'> & {
  size?: ToggleSize
  color?: ToggleColor
  disabled?: boolean
}
export type ToggleProps = ToggleDefaultProps & ToggleControlProps
