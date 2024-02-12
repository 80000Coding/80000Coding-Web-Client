import cn from 'classnames'

type Props = {
  text: string
  size?: 'sm' | 'md'
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>

const Chip = ({ text, size = 'md', className, ...rest }: Props) => {
  const colorClass = 'text-gray-500 dark:text-gray-500 bg-gray-200 dark:bg-gray-700'

  const sizeToClass = {
    md: 'note-2 py-[7px] px-[16px] h-[32px] ',
    sm: 'note-3 py-[2px] px-[12px] h-[22px] ',
  }

  return (
    <div className={cn('rounded-[16px]', colorClass, sizeToClass[size], className)} {...rest}>
      {text}
    </div>
  )
}

export default Chip
