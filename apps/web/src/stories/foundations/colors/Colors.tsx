import React from 'react'

const colors = [
  'white',
  'gray-100',
  'gray-200',
  'gray-300',
  'gray-400',
  'gray-500',
  'gray-600',
  'gray-700',
  'gray-800',
  'gray-900',
  'green-light',
  'green',
  'green-dark',
  'blue-light',
  'blue',
  'blue-dark',
  'violet-light',
  'violet',
  'violet-dark',
  'red-light',
  'red',
  'red-dark',
  'black',
]

const bgColors = [
  'bg-white',
  'bg-gray-100',
  'bg-gray-200',
  'bg-gray-300',
  'bg-gray-400',
  'bg-gray-500',
  'bg-gray-600',
  'bg-gray-700',
  'bg-gray-800',
  'bg-gray-900',
  'bg-green-light',
  'bg-green',
  'bg-green-dark',
  'bg-blue-light',
  'bg-blue',
  'bg-blue-dark',
  'bg-violet-light',
  'bg-violet',
  'bg-violet-dark',
  'bg-red-light',
  'bg-red',
  'bg-red-dark',
  'bg-black',
]
const textColors = [
  'text-white',
  'text-gray-100',
  'text-gray-200',
  'text-gray-300',
  'text-gray-400',
  'text-gray-500',
  'text-gray-600',
  'text-gray-700',
  'text-gray-800',
  'text-gray-900',
  'text-green-light',
  'text-green',
  'text-green-dark',
  'text-blue-light',
  'text-blue',
  'text-blue-dark',
  'text-violet-light',
  'text-violet',
  'text-violet-dark',
  'text-red-light',
  'text-red',
  'text-red-dark',
  'text-black',
]

export type ColorsProps = {
  mode?: 'light' | 'dark'
}
const Colors = ({ mode = 'light' }: ColorsProps) => {
  return (
    <div className={mode === 'light' ? 'bg-white' : 'bg-black'}>
      {colors.map((color, index) => (
        <div className='flex h-[50px] flex-row items-center gap-4' key={color + index}>
          <div className='flex h-full w-[200px] items-center justify-center'>
            <span className={textColors[index]}>{color}</span>
          </div>
          <div className={`flex h-full w-full items-center justify-center ${bgColors[index]}`}></div>
        </div>
      ))}
    </div>
  )
}

export default Colors
