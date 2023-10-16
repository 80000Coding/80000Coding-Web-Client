'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import TopbarWithXIcon from '@/components/common/TopbarWithXIcon'

export default function SigninPage() {
  const router = useRouter()

  const handleClick = useCallback(() => {
    if (confirm('홈으로 이동하시겠습니까?')) router.push('/')
  }, [router])

  return (
    <div>
      <TopbarWithXIcon title='로그인' onClose={handleClick} />
    </div>
  )
}
