export type ToggleSize = 'sm' | 'md' | 'lg'
export type ToggleColor = 'green' | 'darkgreen' | 'blue' | 'violet' | 'red'

export type ToggleSliderColor = Record<ToggleColor, string>
export type ToggleSliderSize = Record<ToggleSize, string>

export type ToggleControlProps = {
  isChecked?: boolean
  onToggleClick?: (isChecked: boolean) => void
}
export type ToggleDefaultProps = React.HTMLAttributes<HTMLLabelElement> & {
  size?: ToggleSize
  color?: ToggleColor
  disabled?: boolean
}
export type Props = ToggleDefaultProps & ToggleControlProps
