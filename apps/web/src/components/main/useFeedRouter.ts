import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export default function useFeedRouter() {
  const router = useRouter()

  const moveToContent = useCallback(
    (id: number) => {
      router.push(`/post/${id}`)
    },
    [router],
  )

  return { moveToContent }
}
