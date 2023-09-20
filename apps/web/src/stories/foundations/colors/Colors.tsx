import React from 'react'

const colors = [
  'white',
  'gray-light-100',
  'gray-light-200',
  'gray-light-300',
  'gray-light-400',
  'gray-light-500',
  'gray-light-600',
  'gray-light-700',
  'gray-light-800',
  'gray-light-900',
  'gray-dark-100',
  'gray-dark-200',
  'gray-dark-300',
  'gray-dark-400',
  'gray-dark-500',
  'gray-dark-600',
  'gray-dark-700',
  'gray-dark-800',
  'gray-dark-900',
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
  'bg-gray-light-100',
  'bg-gray-light-200',
  'bg-gray-light-300',
  'bg-gray-light-400',
  'bg-gray-light-500',
  'bg-gray-light-600',
  'bg-gray-light-700',
  'bg-gray-light-800',
  'bg-gray-light-900',
  'bg-gray-dark-100',
  'bg-gray-dark-200',
  'bg-gray-dark-300',
  'bg-gray-dark-400',
  'bg-gray-dark-500',
  'bg-gray-dark-600',
  'bg-gray-dark-700',
  'bg-gray-dark-800',
  'bg-gray-dark-900',
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
  'text-gray-light-100',
  'text-gray-light-200',
  'text-gray-light-300',
  'text-gray-light-400',
  'text-gray-light-500',
  'text-gray-light-600',
  'text-gray-light-700',
  'text-gray-light-800',
  'text-gray-light-900',
  'text-gray-dark-100',
  'text-gray-dark-200',
  'text-gray-dark-300',
  'text-gray-dark-400',
  'text-gray-dark-500',
  'text-gray-dark-600',
  'text-gray-dark-700',
  'text-gray-dark-800',
  'text-gray-dark-900',
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
