'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import TopbarWithXIcon from '@/components/shared/TopbarWithXIcon'
import SignupForm from '@/components/signup/SignupForm'

export default function SignupPage() {
  const router = useRouter()

  const handleClick = useCallback(() => {
    /** TODO: Alert 생기면 교체 */
    if (confirm('홈으로 이동하시겠습니까?')) router.push('/')
  }, [router])

  return (
    <div className='flex h-[100dvh] w-full flex-col'>
      <TopbarWithXIcon title='회원가입' onClose={handleClick} />
      <SignupForm />
    </div>
  )
}
