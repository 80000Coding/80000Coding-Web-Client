import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

import { SORT_KEYS } from './sort-filter'

export type FeedFilterQueryParams = {
  category?: number
  org?: number
  sort?: SORT_KEYS
}

export default function useFilterRouter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const moveToParams = useCallback(
    (params: FeedFilterQueryParams) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()))
      Object.entries(params).forEach(([key, value]) => {
        current.set(key, value as string)
      })

      const newQueryString = current.toString()
      const hasQueryString = newQueryString.length > 0
      const url = hasQueryString ? `${pathname}?${newQueryString}` : pathname

      router.push(url)
    },
    [router, pathname, searchParams],
  )

  return {
    moveToParams,
  }
}
