'use client'

import Feed from './Feed'
import { ContentListType } from './list/mock/listMockData'
import useFeedLists from './useFeedLists'

export default function FeedList({ items }: { items: ContentListType }) {
  const { feeds } = useFeedLists(items)

  return (
    <div className='min-h-screen space-y-3 bg-gray-200 py-3'>
      {feeds.map((feed) => (
        <li key={feed.content_id} className='list-none'>
          <Feed item={feed} />
        </li>
      ))}
    </div>
  )
}
