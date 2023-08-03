const fontSize = [
  //
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
]

const FontSize = () => {
  return (
    <div>
      {fontSize.map((size, index) => (
        <div className='flex h-[50px] flex-row items-center gap-4' key={size + index}>
          <span className={`${size}`}>{'[' + size + '] Hello World'}</span>
        </div>
      ))}
    </div>
  )
}

export default FontSize
