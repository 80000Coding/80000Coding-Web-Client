'use client'

import { Input } from '@80000coding/ui'
import { StaticEditIcon } from '@80000coding/web-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useCallback, useMemo, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'

import SubmitContainer from '../shared/SubmitContainer'

enum STEPS {
  FISRT = 0,
  LAST = 1,
}

const formSchema = z.object({
  profileSrc: z.string().optional(),
  nickname: z.string({ required_error: '닉네임은 필수로 입력해주세요.' }).min(1, '닉네임은 필수로 입력해주세요.'),
  privatePolicyAgreed: z.boolean(),
  emailReceiveAgreed: z.boolean(),
  pushReceiveAgreed: z.boolean(),
})

type SignupFormValues = z.infer<typeof formSchema>

export default function SignupForm() {
  const [step, setStep] = useState(STEPS.FISRT)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<SignupFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      privatePolicyAgreed: false,
      emailReceiveAgreed: false,
      pushReceiveAgreed: false,
    },
  })

  const nickname = watch('nickname')
  const profileSrc = watch('profileSrc')

  const setCustomValue = (id: keyof SignupFormValues, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  }

  const onBack = useCallback(() => {
    setStep((value) => value - 1)
  }, [])

  const onNext = useCallback(() => {
    setStep((value) => value + 1)
  }, [])

  const actionLabel = useMemo(() => {
    switch (step) {
      case STEPS.FISRT:
        return '다음'
      case STEPS.LAST:
        return '완료'
    }
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    switch (step) {
      case STEPS.FISRT:
        return undefined
      case STEPS.LAST:
        return '이전'
    }
  }, [step])

  // const handleResumeFileAttached = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const {
  //       target: { files },
  //     } = e

  //     if (files && files.length) {
  //       const [file] = files

  //       if (file.size > RESUME_FILE_SIZE) {
  //         setError(
  //           'resumeFile',
  //           {
  //             type: 'custom',
  //             message: '이력서는 10MB 이하의 파일만 업로드 가능합니다.',
  //           },
  //           { shouldFocus: true },
  //         )
  //         return
  //       }

  //       if (!DEFAULT_SUPPORTED_RESUME_FORMATS.includes(file.type)) {
  //         setError(
  //           'resumeFile',
  //           {
  //             type: 'custom',
  //             message: `이력서는 ${SUPPORTED_RESUME_EXTENSIONS_STRING} 파일만 업로드 가능합니다.`,
  //           },
  //           { shouldFocus: true },
  //         )
  //         return
  //       }

  //       setAttachedResume(file)

  //       setValue('resumeFile', file, { shouldDirty: true })
  //     }
  //   },
  //   [setValue, setError],
  // )

  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    if (step !== STEPS.LAST) return onNext()

    setLoading(true)
    console.log(data)
    setLoading(false)
  }

  let bodyContent = (
    <div className='px-5 pt-4'>
      <h1 className='title-1 mb-11 text-gray-600'>프로필 설정하기</h1>

      <div className='mb-9 flex flex-col items-center'>
        <Image src={profileSrc || '/profile.svg'} width={96} height={96} alt='프로필' />
        <input ref={inputRef} type='file' className='hidden' id='img' />
        <button onClick={() => inputRef.current?.click()} className='sub-body-1 cursor-pointer py-3 text-gray-700'>
          사진 추가
          <StaticEditIcon className='ml-1 inline h-4 w-4' />
        </button>
        <aside className='caption-3A text-center text-gray-400'>
          권장 사이즈 150px
          <br />
          최대 250KB
        </aside>
      </div>

      <Input
        label='닉네임'
        description='팔만코딩경에서 사용할 닉네임을 입력해 주세요.'
        errorMessage={errors['nickname']?.message}
        isInvalid={!!errors['nickname']}
        setValue={(value) => setCustomValue('nickname', value)}
        value={nickname}
        id='nickname'
      />

      <div className='mt-8 space-y-3 px-3 text-gray-400'>
        <div className='note-2'>주의사항</div>
        <ul className='caption-3A ml-4'>
          <li className='list-disc'>기존과 동일한 닉네임으로 변경할 수 없어요.</li>
          <li className='list-disc'>공백없이 한글과 영문만 가능해요.</li>
          <li className='list-disc'>한 글자 이상 입력해야 해요.</li>
          <li className='list-disc'>특수기호는 사용할 수 없어요.</li>
          <li className='list-disc'>타인과 중복된 닉네임은 설정할 수 없어요.</li>
          <li className='list-disc'>30일에 한 번만 변경 가능해요.</li>
        </ul>
      </div>
    </div>
  )

  if (step === STEPS.LAST) {
    bodyContent = <div>2번 모달</div>
  }

  return (
    <SubmitContainer
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondayActionLabel={secondaryActionLabel}
      onSecondaryAction={step === STEPS.FISRT ? undefined : onBack}
      body={bodyContent}
      disabled={loading}
      secondaryActionDisabled={loading}
    />
  )
}
