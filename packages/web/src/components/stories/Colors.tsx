const colors = [
  'bg-white',
  'bg-gray-50',
  'bg-gray-100',
  'bg-gray-200',
  'bg-gray-300',
  'bg-gray-500',
  'bg-gray-600',
  'bg-gray-700',
  'bg-green',
  'bg-darkgreen',
  'bg-blue',
  'bg-violet',
  'bg-red',
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
          <div className={`flex h-full w-[200px] items-center justify-center ${color}`}></div>
        </div>
      ))}
    </div>
  )
}

export default Colors
