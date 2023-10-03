import { CategoryIconNames } from '@80000coding/ui'

export type OrganiztionType = {
  name: string
  icon: CategoryIconNames
}

export type ProfileType = {
  profile_image_url: string
  user_id: number
  user_name: string
  feeds_count: number
  projects_count: number
  organizations: OrganiztionType[]
}

export const profileMockData: ProfileType = {
  profile_image_url: 'https://picsum.photos/200/300',
  user_id: 1,
  user_name: 'kunlee',
  feeds_count: 13,
  projects_count: 10,
  organizations: [
    {
      name: '42Seoul',
      icon: '42Seoul-rounded',
    },
    {
      name: 'Android',
      icon: 'Android-rounded',
    },
  ],
}
