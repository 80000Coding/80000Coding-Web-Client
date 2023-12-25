import { icons, IconSource, StaticAllOnLightIcon } from '@80000coding/web-icons'
import React from 'react'

type IconsProps = {
  type?: 'category' | 'static' | 'dynamic'
  mode?: 'light' | 'dark'
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

const IconBox = ({ type, name, value }: { type: IconsProps['type']; name: string; value: IconSource }) => {
  const [isCopied, setIsCopied] = React.useState('')

  React.useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied('')
      }, 1000)
    }
  }, [isCopied])

  return (
    <div
      key={name}
      className=' relative flex cursor-pointer flex-col items-center gap-4 border border-gray-200 p-4'
      onClick={() => {
        setIsCopied(name)
        const iconJsx = createJsxString(type, name)
        window.navigator.clipboard.writeText(iconJsx)
      }}
    >
      {value({ className: 'icon-lg ' + (name.startsWith('dynamic') ? 'text-black' : '') })}
      <span className='font-regular'>
        {name
          .split('-')
          .slice(1)
          .map((s) => capitalizeFirstLetter(s))
          .join(' ')}
      </span>
      {isCopied === name && (
        <div className='bg-blue-light/90 absolute left-0 top-0 flex h-full w-full items-center justify-center text-white'>
          <span>Copied!</span>
        </div>
      )}
    </div>
  )
}

export function Icons({ type, mode }: IconsProps) {
  const typedIcons = Object.entries(icons)
    .filter(([key]) => {
      return key.startsWith(type as string)
    })
    .sort()

  const [lightIcons, darkIcons] = typedIcons.reduce(
    (acc, [key, value]) => {
      if (key.includes('light')) {
        acc[0].push([key, value])
      } else if (key.includes('dark')) {
        acc[1].push([key, value])
      }
      return acc
    },
    [[], []] as [typeof typedIcons, typeof typedIcons],
  )

  return (
    <>
      {lightIcons.length === 0 && (
        <div className='grid w-full grid-cols-[repeat(auto-fill,minmax(180px,1fr))] text-gray-700'>
          {typedIcons.map(([key, value]) => (
            <IconBox key={key} name={key} type={type} value={value} />
          ))}
        </div>
      )}
      {mode === 'light' && (
        <div className='grid w-full grid-cols-[repeat(auto-fill,minmax(180px,1fr))] text-gray-700'>
          {lightIcons.map(([key, value]) => (
            <IconBox key={key} name={key} type={type} value={value} />
          ))}
        </div>
      )}
      {mode === 'dark' && (
        <div className='grid w-full grid-cols-[repeat(auto-fill,minmax(180px,1fr))] bg-[#272732] text-white'>
          {darkIcons.map(([key, value]) => (
            <IconBox key={key} name={key} type={type} value={value} />
          ))}
        </div>
      )}
    </>
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
          <StaticAllOnLightIcon className={`${size} `} />
        </div>
      ))}
    </div>
  )
}
