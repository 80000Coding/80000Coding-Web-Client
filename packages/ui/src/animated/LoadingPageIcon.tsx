import { StaticLogoSymbolIcon } from '@80000coding/web-icons'
import cn from 'classnames'
import React from 'react'

type Props = React.ComponentProps<typeof StaticLogoSymbolIcon>

const LoadingPageIcon = ({ className, ...props }: Props) => {
  return <StaticLogoSymbolIcon className={cn('animate-spin-with-delay', className)} {...props} />
}

export default LoadingPageIcon

LoadingPageIcon.displayName = 'LoadingPageIcon'
