'use client'

import { Input, Toggle } from '@80000coding/ui'
import { StaticCloseIcon, StaticEditIcon } from '@80000coding/web-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox, Divider } from '@nextui-org/react'
import Image from 'next/image'
import { useCallback, useMemo, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'

import { getSizeUnit } from '@/lib/utils/humanize-size'

import SubmitContainer from '../shared/SubmitContainer'

const PROFILE_IMAGE_SIZE_LIMIT = 250 * 1024
const SUPPORTED_IMAGE_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']
const SUPPORTED_IMAGE_FORMATS_STRING = SUPPORTED_IMAGE_FORMATS.join(', ')
const SUPPORTED_IMAGE_EXTENSTION_STRING = SUPPORTED_IMAGE_FORMATS.map((format) => format.split('/')[1]).join(', ')

enum STEPS {
  FISRT = 0,
  LAST = 1,
}

const formSchema = z.object({
  profileSrc: z.string().optional(),
  nickname: z
    .string({ required_error: '닉네임은 필수로 입력해주세요.' })
    .min(1, '닉네임은 필수로 입력해주세요.')
    .max(20, '닉네임은 20자 이하로 입력해주세요.'),
  privatePolicyAgreed: z.boolean(),
  emailReceiveAgreed: z.boolean(),
  pushReceiveAgreed: z.boolean(),
})

type SignupFormValues = z.infer<typeof formSchema>

export default function SignupForm() {
  const [step, setStep] = useState(STEPS.FISRT)
  const [loading, setLoading] = useState(false)
  const [attachedImage, setAttachedImage] = useState<File | undefined>()
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    setError,
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
  const privatePolicyAgreed = watch('privatePolicyAgreed')
  const emailReceiveAgreed = watch('emailReceiveAgreed')
  const pushReceiveAgreed = watch('pushReceiveAgreed')

  const disabledState =
    (step === STEPS.FISRT && (!nickname || !!errors['nickname'] || !!errors['profileSrc'])) ||
    (step === STEPS.LAST && (!privatePolicyAgreed || !emailReceiveAgreed || !pushReceiveAgreed))

  const setCustomValue = useCallback(
    (id: keyof SignupFormValues, value: any) => {
      setValue(id, value, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
    },
    [setValue],
  )

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

  const handleProfileImgChanged = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { files },
      } = e

      if (files && files.length) {
        const [file] = files

        if (file.size > PROFILE_IMAGE_SIZE_LIMIT) {
          setError(
            'profileSrc',
            {
              type: 'custom',
              message: `이미지는 ${getSizeUnit(PROFILE_IMAGE_SIZE_LIMIT)} 이하의 파일만 업로드 가능합니다.`,
            },
            { shouldFocus: true },
          )
          return
        }

        if (!SUPPORTED_IMAGE_FORMATS.includes(file.type)) {
          setError(
            'profileSrc',
            {
              type: 'custom',
              message: `이미지는 ${SUPPORTED_IMAGE_EXTENSTION_STRING} 파일만 업로드 가능합니다.`,
            },
            { shouldFocus: true },
          )
          return
        }

        setAttachedImage(file)
        {
          /** FIXME: api 연결되면 s3 이미지 응답값으로 변경 */
        }
        setCustomValue('profileSrc', 'file')
      }
    },
    [setCustomValue, setError],
  )

  const handleProfileImgRemoved = useCallback(() => {
    setAttachedImage(undefined)
    setCustomValue('profileSrc', undefined)
  }, [setCustomValue])

  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    if (step !== STEPS.LAST) return onNext()

    // setLoading(true)
    console.log(data)
    setLoading(false)
  }

  let bodyContent = (
    <div className='px-5 pt-4'>
      <h1 className='title-1 mb-11 text-gray-600'>프로필 설정하기</h1>

      <div className='mb-4 flex flex-col items-center'>
        {/** FIXME: api 연결되면 s3 이미지 url 로 변경 */}
        <div className='relative'>
          <Image
            src={attachedImage ? URL.createObjectURL(attachedImage) : '/profile.svg'}
            width={96}
            height={96}
            className='aspect-square rounded-full border border-gray-300 object-cover'
            alt='프로필'
          />
          {attachedImage && (
            <button onClick={handleProfileImgRemoved} className='absolute -right-3 top-1 rounded-full border border-gray-300 bg-white p-2'>
              <StaticCloseIcon className='h-3 w-3' />
            </button>
          )}
        </div>
        <input
          ref={inputRef}
          type='file'
          accept={SUPPORTED_IMAGE_FORMATS_STRING}
          className='hidden'
          id='img'
          onChange={handleProfileImgChanged}
        />
        <button onClick={() => inputRef.current?.click()} className='sub-body-1 cursor-pointer py-3 text-gray-700'>
          사진 추가
          <StaticEditIcon className='ml-1 inline h-4 w-4' />
        </button>
        <aside className='caption-3A text-center text-gray-400'>
          권장 사이즈 150px
          <br />
          최대 {getSizeUnit(PROFILE_IMAGE_SIZE_LIMIT)}
          <br />
          {SUPPORTED_IMAGE_EXTENSTION_STRING}
        </aside>
        <div className='caption-3 text-red-warning mt-2 h-3'>{errors['profileSrc']?.message}</div>
      </div>

      <Input
        label='닉네임'
        /** TODO: nickname 가능 여부에 따른 메시지 변경 */
        description={nickname ? '사용 가능한 닉네임이에요.' : '팔만코딩경에서 사용할 닉네임을 입력해 주세요.'}
        errorMessage={errors['nickname']?.message}
        isInvalid={!!errors['nickname']}
        isCorrect={!!nickname && !errors['nickname']}
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
    bodyContent = (
      <div className='px-5 pt-4'>
        <h1 className='title-1 mb-10 text-gray-600'>프로필 설정하기</h1>

        <div className='space-y-6'>
          <div className='body-1 text-gray-600'>소셜 인증 제공자를 이용한 가입시 유의사항</div>
          <div className='sub-body-3A text-gray-400'>
            이용약관에 대한 설명입니다. 잘 읽고 동의하시면 체크박스에 체크해주세요 이용약관에 대한 설명입니다. 잘 읽고 동의하시면 체크박스에
            체크해주세요이용약관에 대한 설명입니다. 잘 읽고 동의하시면 체크박스에 체크해주세요 이용약관에 대한 설명입니다. 잘 읽고
            동의하시면 체크박스에 체크해주세요 이용약관에 대한 설명입니다.{' '}
          </div>
        </div>
        <div className='text-blue sub-body-3 mb-8 mt-[50px] space-y-4'>
          {/** TODO: 모달? 탭? */}
          <div>서비스 이용 약관</div>
          <div>개인정보처리방침</div>
        </div>
        <Checkbox
          radius='sm'
          size='sm'
          classNames={{ label: 'leading text-sm font-normal text-gray-400' }}
          isSelected={privatePolicyAgreed}
          onChange={(e) => setCustomValue('privatePolicyAgreed', e.target.checked)}
        >
          이용약관에 관한 모든 내용을 숙지하였고, 회원가입을 할게요.
        </Checkbox>

        <Divider className='mb-9 mt-8 bg-gray-300' />

        <div className='space-y-6'>
          <div className='flex items-center justify-between'>
            <div className='body-2'>이메일 수신 동의</div>
            <Toggle isChecked={emailReceiveAgreed} onToggleClick={(value) => setCustomValue('emailReceiveAgreed', value)} />
          </div>
          <div className='flex items-center justify-between'>
            <div className='body-2'>푸시 메시지 수신 동의</div>
            <Toggle isChecked={pushReceiveAgreed} onToggleClick={(value) => setCustomValue('pushReceiveAgreed', value)} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <SubmitContainer
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondayActionLabel={secondaryActionLabel}
      onSecondaryAction={step === STEPS.FISRT ? undefined : onBack}
      body={bodyContent}
      disabled={loading || disabledState}
      secondaryActionDisabled={loading}
    />
  )
}
