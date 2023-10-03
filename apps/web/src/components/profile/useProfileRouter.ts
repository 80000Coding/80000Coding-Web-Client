import {
  StaticLikeIcon,
  StaticLikeWhiteIcon,
  StaticPostIcon,
  StaticPostWhiteIcon,
  StaticProjectIcon,
  StaticProjectWhiteIcon,
} from '@80000coding/web-icons'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import { as } from '@/lib/utils/as'

const tabs = [
  {
    label: '게시글',
    url: 'feeds',
    selectedIcon: StaticPostIcon,
    icon: StaticPostWhiteIcon,
    selected: false,
  },
  {
    label: '프로젝트',
    url: 'projects',
    selectedIcon: StaticProjectIcon,
    icon: StaticProjectWhiteIcon,
    selected: false,
  },
  {
    label: '좋아요',
    url: 'likes',
    selectedIcon: StaticLikeIcon,
    icon: StaticLikeWhiteIcon,
    selected: false,
  },
]

export default function useProfileRouter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const query = as<string>(searchParams.get('tab') || '')
  const profileTabs = useMemo(
    () =>
      tabs.map((tab, index) =>
        (!query && index === 0) || tab.url === query
          ? {
              ...tab,
              selected: true,
            }
          : tab,
      ),
    [query],
  )

  const moveToParams = useCallback(
    (params: { tab: string }) => {
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
    profileTabs,
  }
}
