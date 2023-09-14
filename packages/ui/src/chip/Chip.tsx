import cn from 'classnames'

type Props = {
  text: string
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>

const Chip = ({ text, className, ...rest }: Props) => {
  return (
    <span className={cn('caption-3 rounded-full bg-gray-200 px-[10px] py-[5px] text-gray-600', className)} {...rest}>
      {text}
    </span>
  )
}

export default Chip
