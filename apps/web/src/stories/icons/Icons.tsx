import { icons, StaticAllIcon } from '@80000coding/web-icons'
import React from 'react'

type IconsProps = {
  type?: 'category' | 'static' | 'dynamic'
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function createJsxString(type: IconsProps['type'], key: string) {
  return (
    '<' +
    capitalizeFirstLetter(type || '') +
    key
      .split('-')
      .slice(1)
      .map((s) => capitalizeFirstLetter(s))
      .join('') +
    'Icon' +
    (type === 'dynamic' ? ' className="text-green"' : '') +
    ' />'
  )
}

export function Icons({ type }: IconsProps) {
  const [isCopied, setIsCopied] = React.useState('')
  const typedIcons = Object.entries(icons)
    .filter(([key]) => {
      return key.startsWith(type as string)
    })
    .sort()

  React.useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied('')
      }, 1000)
    }
  }, [isCopied])

  return (
    <div className='grid w-full grid-cols-[repeat(auto-fill,minmax(180px,1fr))]'>
      {typedIcons.map(([key, value]) => (
        <div
          key={key}
          className=' relative flex cursor-pointer flex-col items-center gap-4 border border-gray-200 p-4'
          onClick={() => {
            setIsCopied(key)
            const iconJsx = createJsxString(type, key)
            window.navigator.clipboard.writeText(iconJsx)
          }}
        >
          {value({ className: 'icon-lg ' + (key.startsWith('dynamic') ? 'text-black' : '') })}
          <span className='font-regular text-gray-700'>
            {key
              .split('-')
              .slice(1)
              .map((s) => capitalizeFirstLetter(s))
              .join(' ')}
          </span>
          {isCopied === key && (
            <div className='bg-blue-light/90 absolute left-0 top-0 flex h-full w-full items-center justify-center text-white'>
              <span>Copied!</span>
            </div>
          )}
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
          <StaticAllIcon className={`${size} `} />
        </div>
      ))}
    </div>
  )
}
