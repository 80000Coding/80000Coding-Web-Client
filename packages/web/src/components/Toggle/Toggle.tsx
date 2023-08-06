import React, { useState } from 'react'

type Props = {
  isChecked: boolean
} & React.HTMLAttributes<HTMLDivElement>

const Toggle = ({ isChecked: initialChecked, className, ...rest }: Props) => {
  const [isChecked, setIsChecked] = useState(initialChecked)

  const handleClick = () => {
    setIsChecked((prevChecked) => !prevChecked)
  }

  return (
    <div className={className} {...rest} onClick={handleClick}>
      {isChecked ? (
        <svg width='50' height='24' viewBox='0 0 50 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='50' y='24' width='50' height='24' rx='12' transform='rotate(180 50 24)' fill='#00D287' />
          <circle cx='38' cy='12' r='9' transform='rotate(180 38 12)' fill='white' />
        </svg>
      ) : (
        <svg width='50' height='24' viewBox='0 0 50 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='50' y='24' width='50' height='24' rx='12' transform='rotate(180 50 24)' fill='#D9D9D9' />
          <circle cx='12' cy='12' r='9' transform='rotate(180 12 12)' fill='white' />
        </svg>
      )}
    </div>
  )
}

export default Toggle
