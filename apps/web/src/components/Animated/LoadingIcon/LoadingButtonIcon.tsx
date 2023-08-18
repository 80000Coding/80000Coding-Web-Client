import { DynamicLoadingButtonIcon } from '@80000coding/web-icons'
import cn from 'classnames'
import React from 'react'

type Props = React.ComponentProps<typeof DynamicLoadingButtonIcon>

const LoadingButtonIcon = ({ className, ...props }: Props) => {
  return <DynamicLoadingButtonIcon className={cn('animate-spin', className)} {...props} />
}

export default LoadingButtonIcon
