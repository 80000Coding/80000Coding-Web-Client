import cn from 'classnames'
import React, { useState } from 'react'

import { toggleSliderColor, toggleSliderSize } from './Toggle.const'
import type { Props } from './Toggle.type'

const Toggle = ({ className, isChecked, size = 'md', color = 'green', disabled = false, onToggleClick, ...rest }: Props) => {
  const [cheked_, setChecked_] = useState(false)

  const onChange = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
    setChecked_(checked)
  }

  return (
    <label className={cn('relative inline-flex cursor-pointer items-center', className)} {...rest}>
      <input
        type='checkbox'
        value=''
        className='peer sr-only'
        checked={isChecked === undefined ? cheked_ : isChecked}
        disabled={disabled}
        onChange={isChecked === undefined || onToggleClick === undefined ? onChange : ({ target: { checked } }) => onToggleClick(checked)}
      />
      <div
        className={cn(
          'rounded-full bg-gray-200 transition-colors', // default styles
          'after:absolute after:rounded-full after:bg-white after:transition-all after:content-[""] ', // after selector styles
          'dark:bg-gray-700', // dark mode styles
          toggleSliderSize[size],
          toggleSliderColor[color],
        )}
      />
    </label>
  )
}

export default Toggle
