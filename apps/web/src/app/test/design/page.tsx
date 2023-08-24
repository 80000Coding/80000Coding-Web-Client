import { InputBox } from '@80000coding/ui'

export default function Page() {
  const inputText = 'zzz'
  const changeText = () => {
    console.log(inputText)
  }
  return (
    <div className='m-10 flex gap-x-8'>
      <InputBox className='w-full' text={inputText} placeholder='플레이스 홀더' onChangeValue={changeText}></InputBox>
      {inputText}
    </div>
  )
}
