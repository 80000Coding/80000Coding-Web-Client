'use client'

import { Button, ThemeDropdown } from '@80000coding/ui'
import cn from 'classnames'

export default function AlertPage() {
  return (
    <>
      <div className={cn('bg-red', 'dark:bg-white dark:text-black')}>hello</div>
      <Button text='GitHub로 계속하귕' className='bg-black dark:bg-white' />
      <Button text='primary' variant='primary' className='bg-green' />
      <Button text='outline' variant='outline' className='bg-red' />
      <ThemeDropdown />
    </>
  )
}
