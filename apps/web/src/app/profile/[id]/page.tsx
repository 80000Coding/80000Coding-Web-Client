import Header from '@/components/common/Header'
import FeedList from '@/components/main/FeedList'
import { listMockData } from '@/components/main/list/mock/listMockData'
import { profileMockData } from '@/components/profile/mock/profileMockData'
import Profile from '@/components/profile/Profile'

export default function ProfilePage() {
  const profileResult = profileMockData
  const feedsResult = listMockData

  return (
    <div>
      <Header />

      <Profile data={profileResult} />
      <FeedList items={feedsResult} />
    </div>
  )
}
