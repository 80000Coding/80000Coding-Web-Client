import { icons, StaticAllResultIcon } from '@80000coding/web-icons'
import React from 'react'

type IconsProps = {
  type?: 'category' | 'static' | 'dynamic'
}

export function Icons({ type }: IconsProps) {
  const typedIcons = Object.entries(icons)
    .filter(([key]) => {
      return key.startsWith(type as string)
    })
    .sort()
  return (
    <div className='grid w-full grid-cols-[repeat(auto-fill,minmax(180px,1fr))]'>
      {typedIcons.map(([key, value]) => (
        <div key={key} className='flex flex-col items-center gap-4 border border-gray-200 p-4 '>
          {value({ className: 'icon-lg ' + (key.startsWith('dynamic') ? 'text-black' : '') })}
          <span className='font-regular text-black'>{key.split('-')[1]}</span>
        </div>
      ))}
    </div>
  )
}

const iconSizes = ['icon-sm', 'icon-md', 'icon-lg']
const iconCustomSizes = ['w-[50px] h-[50px]']

export function IconSizes() {
  return (
    <div className='flex w-[300px] flex-col'>
      <div className='flex h-3 flex-row items-center justify-between gap-4 border border-gray-200 bg-gray-200 p-4'>
        <p className='text-black'>classNames</p>
        <p className='text-black'>icon</p>
      </div>
      {iconSizes.concat(iconCustomSizes).map((size) => (
        <div key={size} className='flex flex-row items-center justify-between gap-4 border border-gray-200 p-4'>
          <span className=' font-bold text-gray-700'>{size}</span>
          <StaticAllResultIcon className={`${size} `} />
        </div>
      ))}
    </div>
  )
}
