'use client'

import { Button } from '@80000coding/ui'

type Props = {
  body?: React.ReactElement
  onSubmit: () => void
  actionLabel: string
  disabled?: boolean
  onSecondaryAction?: () => void
  secondayActionLabel?: string
  secondaryActionDisabled?: boolean
}

export default function SubmitContainer({
  body,
  onSubmit,
  actionLabel,
  onSecondaryAction,
  secondayActionLabel,
  disabled,
  secondaryActionDisabled,
}: Props) {
  return (
    <div className='flex h-full flex-col'>
      <div className='flex-1'>{body}</div>
      <div className='mx-5 mb-20 flex items-center gap-x-4'>
        {onSecondaryAction && secondayActionLabel && (
          <Button onClick={onSecondaryAction} variant='outline' disabled={secondaryActionDisabled} text={secondayActionLabel} />
        )}
        <Button onClick={onSubmit} disabled={disabled} className='bg-green' text={actionLabel} />
      </div>
    </div>
  )
}
