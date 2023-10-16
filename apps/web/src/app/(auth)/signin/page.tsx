'use client'

import { Button } from '@80000coding/ui'
import { CategoryGithubRoundedIcon, StaticLogoSymbolIcon } from '@80000coding/web-icons'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import TopbarWithXIcon from '@/components/shared/TopbarWithXIcon'

export default function SigninPage() {
  const router = useRouter()

  const handleClick = useCallback(() => {
    /** TODO: Alert 생기면 교체 */
    if (confirm('홈으로 이동하시겠습니까?')) router.push('/')
  }, [router])

  const handleGithubSignin = useCallback(() => {
    /** TODO: github login 연결 */
  }, [])

  return (
    <div className='flex h-[100dvh] w-full flex-col'>
      <TopbarWithXIcon title='로그인' onClose={handleClick} />
      <div className='mx-5 mt-40 flex flex-1 flex-col items-center'>
        <StaticLogoSymbolIcon className='h-20 w-20' />
        <div className='title-1A mb-[58px] mt-6 text-center'>
          팔만코딩경에 로그인하여
          <br />
          당신의 지식을 공유해 주세요!
        </div>
        <Button
          onClick={handleGithubSignin}
          leftIcon={<CategoryGithubRoundedIcon className='h-[30px] w-[30px]' />}
          text='GitHub로 계속하기'
          className='bg-black'
        />
      </div>
      <div className='mb-[120px] space-y-2 text-center'>
        <aside className='body-3 text-gray-400'>아직 GitHub 회원이 아니신가요?</aside>
        <a href='https://github.com/signup' target='_blank' className='body-1A block text-black underline'>
          GitHub 가입하기
        </a>
      </div>
    </div>
  )
}
