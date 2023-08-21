// TODO: StaticAllResultIcon -> LoadingPageIcon 으로 바꿔야함
import { StaticAllResultIcon } from '@80000coding/web-icons'
import cn from 'classnames'
import React from 'react'

type Props = React.ComponentProps<typeof StaticAllResultIcon>

const LoadingPageIcon = ({ className, ...props }: Props) => {
  return <StaticAllResultIcon className={cn('animate-spin-with-delay', className)} {...props} />
}

export default LoadingPageIcon

LoadingPageIcon.displayName = 'LoadingPageIcon'
