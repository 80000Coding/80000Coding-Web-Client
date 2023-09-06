'use client'

import { ContentListType } from './list/mock/listMockData'
import useFeedLists from './useFeedLists'

export default function FeedList({ items }: { items: ContentListType }) {
  const { feeds } = useFeedLists(items)
  console.log(feeds)

  return <div>FeedList</div>
}
