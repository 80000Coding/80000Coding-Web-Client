import cn from 'classnames'

type ChipSize = 'xs' | 'sm' | 'md' | 'lg' | 'none'
type ChipVariant = 'primary' | 'outline' | 'plain' | 'flat' | 'none'

type Props = {
  text?: string
  size?: ChipSize
  variant?: ChipVariant
  disabled?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

const Chip = ({ text, children, className, size = 'none', variant = 'none', disabled = false, ...rest }: Props) => {
  const sizeToClass = {
    xs: 'caption-3 py-[5px] px-[10px]',
    sm: 'note-3 py-[8px] px-[15px]',
    md: 'body-1 px-[22px] py-[9px]',
    lg: 'body-1 py-[13px] px-[22px]',
    none: '',
  }
  const variantToClass = {
    primary: 'bg-green text-white disabled:bg-gray-300',
    outline:
      'text-green shadow-[inset_0_0_0_1px] shadow-green bg-white disabled:text-gray-300 disabled:shadow-[inset_0_0_0_1px] disabled:shadow-gray-300',
    plain: 'bg-white text-gray-600 shadow-[inset_0_0_0_1px] shadow-gray-300',
    flat: 'bg-gray-200 text-gray-600',
    none: '',
  }

  return (
    <button
      className={cn(
        'rounded-full',
        sizeToClass[size],
        variantToClass[variant],
        rest.onClick ? 'cursor-pointer' : 'cursor-default',
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {text || children}
    </button>
  )
}

export default Chip
