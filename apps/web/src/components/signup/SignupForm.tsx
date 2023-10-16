'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'

import SubmitContainer from '../shared/SubmitContainer'

enum STEPS {
  FISRT = 0,
  LAST = 1,
}

const formSchema = z.object({
  profileSrc: z.string().optional(),
  nickname: z.string().min(1),
  privatePolicyAgreed: z.boolean(),
  emailReceiveAgreed: z.boolean(),
  pushReceiveAgreed: z.boolean(),
})

type SignupFormValues = z.infer<typeof formSchema>

export default function SignupForm() {
  const [step, setStep] = useState(STEPS.FISRT)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      privatePolicyAgreed: false,
      emailReceiveAgreed: false,
      pushReceiveAgreed: false,
    },
  })

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

  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    if (step !== STEPS.LAST) return onNext()

    setLoading(true)
    console.log(data)
    setLoading(false)
  }

  let bodyContent = <div>1번 모달</div>

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
