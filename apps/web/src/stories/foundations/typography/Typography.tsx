import cn from 'classnames'
import React from 'react'

const fontFamilies = ['Noto Sans KR']

const classes = [
  'large-title-1',
  'large-title-1A',
  'title-1',
  'title-1A',
  'sub-title-1',
  'sub-title-1A',
  'sub-title-2',
  'sub-title-2A',
  'sub-title-3',
  'sub-title-3A',
  'body-1',
  'body-1A',
  'body-2',
  'body-2A',
  'body-3',
  'body-3A',
  'body-3B',
  'sub-body-1',
  'sub-body-1A',
  'sub-body-2',
  'sub-body-2A',
  'sub-body-3',
  'sub-body-3A',
  'note-1',
  'note-2',
  'note-3',
  'caption-1',
  'caption-1A',
  'caption-2',
  'caption-2A',
  'caption-3',
  'caption-3A',
]

function Classes() {
  return (
    <div className='grid w-full grid-cols-2 grid-rows-1 gap-y-[1px]  bg-gray-400'>
      {classes.map((typo) => (
        <React.Fragment key={typo}>
          <div className='bg-white p-8 text-black'>{typo}</div>
          <div className={cn(typo, 'bg-white p-8 text-black')}>
            <p className='whitespace-pre-line'>{`안녕하세요!
			  80000Coding?`}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

function FontFamily() {
  return (
    <div className='grid grid-cols-2 grid-rows-1 gap-y-[1px]  bg-gray-400'>
      {fontFamilies.map((typo) => (
        <React.Fragment key={typo}>
          <div className='bg-white p-8 text-black'>{typo}</div>
          <div className={cn(typo, 'bg-white p-8 text-black')}>안녕하세요! 80000Coding?</div>
        </React.Fragment>
      ))}
    </div>
  )
}

export type TypographyProps = {
  type: string
}
export function Typography({ type }: TypographyProps) {
  if (type === 'classes') {
    return <Classes />
  } else if (type === 'font-family') {
    return <FontFamily />
  }
}
