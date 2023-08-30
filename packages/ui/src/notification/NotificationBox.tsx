import cn from 'classnames'

type NotificationBoxProps = {
  text: string
} & React.HTMLAttributes<HTMLDivElement>

const NotificationBox = ({ text, children, className, ...rest }: NotificationBoxProps) => {
  return (
    <div className={cn('caption-3A text-red-warning w-full max-w-md rounded-[20px] bg-white px-[20px] py-[15px]', className)} {...rest}>
      {text || children}
    </div>
  )
}

export default NotificationBox
