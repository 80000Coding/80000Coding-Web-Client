'use client'

import { StaticCloseIcon } from '@80000coding/web-icons'

type Props = {
  title?: string
  onAction?: () => void
  actionLabel?: string | React.ReactNode
  onClose: () => void
}

export default function TopbarWithXIcon({ title, onAction = () => {}, actionLabel, onClose }: Props) {
  return (
    <div className='relative flex items-center justify-center p-5'>
      <StaticCloseIcon onClick={onClose} className='mr-auto h-5 w-5' />
      {title && <div className='body-1 absolute text-gray-700'>{title}</div>}
      {actionLabel && (
        <div onClick={onAction} className='body-2 text-gray-700'>
          {actionLabel}
        </div>
      )}
    </div>
  )
}
