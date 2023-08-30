import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

import { as } from '@/lib/utils/as'

import { SORT_KEYS } from './SortFilter'

export type FeedFilterQueryParams = {
  category?: number
  org?: number
  sort?: SORT_KEYS
}

export default function useFilterRouter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const category = as<number>(searchParams.get('category') || 0)

  const organization = as<number>(searchParams.get('org') || 0)

  const sort = as<SORT_KEYS>(searchParams.get('sort') || 'ID')

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
    category,
    organization,
    sort,
  }
}
