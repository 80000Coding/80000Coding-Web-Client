'use client'

import { LoadingPageIcon } from '@80000coding/ui'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const baseUrl = '[여기호스트넣기]/api/v1/auth/login/github/code'

const signin = async (code: string) => {
  return fetch(`${baseUrl}?code=${code}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
}

export default function CallbackPage() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if (code) {
      signin(code).then((result) => {
        console.log('hihihihi')
        console.log(result)
      })
    }
  }, [code])

  return (
    <div>
      <LoadingPageIcon />
    </div>
  )
}
