import { useState } from 'react'

import { ProfileType } from './mock/profileMockData'

export type Refined<T> = {
  /** 원본데이터 */
  _raw: T
} & T

export type RefinedProfileType = Refined<ProfileType> & {
  /** 게시글 수 9999 -> 9,999 */
  displayFeedCount: string
  /** 프로젝트 수 9999 -> 9,999 */
  displayProjectCount: string
}

function refine(item: ProfileType): RefinedProfileType {
  const { feeds_count, projects_count } = item

  return {
    _raw: item,
    ...item,
    displayFeedCount: feeds_count.toLocaleString(),
    displayProjectCount: projects_count.toLocaleString(),
  }
}

export default function useProfile(data: ProfileType) {
  /** TODO: 로그인된 유저 아이디 context로 가져와서 대체 */
  const loggedInUserId = 1
  const [profile, setProfile] = useState(refine(data))

  const isMyProfile = data.user_id === loggedInUserId

  return {
    profile,
    isMyProfile,
  }
}
