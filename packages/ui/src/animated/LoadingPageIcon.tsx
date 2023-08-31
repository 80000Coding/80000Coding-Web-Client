import { StaticLoadingPageIcon } from '@80000coding/web-icons'
import cn from 'classnames'
import React from 'react'

type Props = React.ComponentProps<typeof StaticLoadingPageIcon>

const LoadingPageIcon = ({ className, ...props }: Props) => {
  return <StaticLoadingPageIcon className={cn('animate-spin-with-delay', className)} {...props} />
}

export default LoadingPageIcon

LoadingPageIcon.displayName = 'LoadingPageIcon'
