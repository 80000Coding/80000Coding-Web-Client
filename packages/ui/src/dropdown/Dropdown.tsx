import type { IconSource } from '@80000coding/web-icons'
import cn from 'classnames'

type Menu = {
  title: string
  titleColor?: string
  icon: IconSource
  onClick: () => void
}
type DropdownProps = {
  menus: Menu[]
} & React.HTMLAttributes<HTMLDivElement>

const Dropdown = ({ menus, className, ...rest }: DropdownProps) => {
  return (
    <div
      className={cn('absolute z-10 rounded-[12px] bg-white shadow-[0px_2px_20px_0px_rgba(198,198,198,0.5)] dark:bg-black', className)}
      {...rest}
    >
      {menus.map((menu, index) => (
        <div
          key={menu.title}
          className='relative flex cursor-pointer items-center justify-between gap-[45px] px-[17px] py-[16px]'
          onClick={menu.onClick}
        >
          <span className={cn('body-2', menu.titleColor || 'text-gray-700')}>{menu.title}</span>
          {menu.icon({})}
          {menus.length > 1 && index !== menus.length - 1 && (
            <div className='absolute left-0 top-[100%] h-[1px] w-full -translate-y-1/2 bg-gray-200' />
          )}
        </div>
      ))}
    </div>
  )
}

export default Dropdown
