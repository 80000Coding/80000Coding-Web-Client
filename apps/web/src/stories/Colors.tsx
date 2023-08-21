import React from 'react'

const colors = [
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

const Colors = () => {
  return (
    <div>
      {colors.map((color, index) => (
        <div className='flex h-[50px] flex-row items-center gap-4' key={color + index}>
          <div className='flex h-full w-[200px] items-center justify-center'>
            <span>{color}</span>
          </div>
          <div className={`flex h-full w-[200px] items-center justify-center ${color}`}>a</div>
        </div>
      ))}
    </div>
  )
}

export default Colors
