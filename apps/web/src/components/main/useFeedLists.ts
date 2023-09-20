import { useState } from 'react'

import { formatDistanceFromNowTo } from '@/lib/utils/date/formatDistanceFromNowTo'
import { humanizeNumber } from '@/lib/utils/number/humanizeNumber'

import { ContentListType } from './list/mock/listMockData'
import { ContentFeedType } from './list/mock/listMockType'

export type Refined<T> = {
  /** 원본데이터 */
  _raw: T
} & T

export type RefinedFeedsType = Refined<ContentFeedType> & {
  /** 업로드 시간 */
  displayCreatedAt: string
  /** 조회수 9999 -> 9,999 */
  displayViewCount: string
  /** 댓글 수 9999 -> 9,999 */
  displayCommentCount: string
  /** 북마크 수 9999 -> 9,999 */
  displayBookmarkCount: string
  /** 좋아요 수 9999 -> 9,999 */
  displayLikeCount: string
}

function refine(items: ContentFeedType[]): RefinedFeedsType[] {
  return items.map((item) => {
    const { create_dt, views, comment_count, mark_count, like_count } = item

    return {
      _raw: item,
      ...item,
      displayCreatedAt: `${formatDistanceFromNowTo(create_dt)} 전`,
      displayViewCount: humanizeNumber(views),
      displayCommentCount: humanizeNumber(comment_count),
      displayBookmarkCount: humanizeNumber(mark_count),
      displayLikeCount: humanizeNumber(like_count),
    }
  })
}

export default function useFeedLists(items: ContentListType) {
  const { content } = items
  const [feeds, setFeeds] = useState(refine(content))

  return {
    feeds,
  }
}
