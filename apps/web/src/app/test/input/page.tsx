'use client'
import { Input } from '@80000coding/ui'
import { useState } from 'react'

export default function Page() {
  const [value, setValue] = useState('')

  return (
    <div className='flex h-screen w-screen flex-col items-start gap-2 p-10'>
      <Input value={value} setValue={setValue} />
      <Input value={value} setValue={setValue} label={'조직 이름'} description={'조직 이름을 입력해 주세요'} />
      <Input value={value} setValue={setValue} isInvalid={value === '가나다라'} description='' displayLength={false}></Input>
      <Input
        value={value}
        setValue={setValue}
        isInvalid={false}
        description=''
        displayLength={false}
        isCorrect={value === '가나다라'}
      ></Input>
      {/* <InputSearch></InputSearch> */}
    </div>
  )
}
