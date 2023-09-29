'use client'

import { IconChip } from '@80000coding/ui'
import classNames from 'classnames'
import Link from 'next/link'

import { ProfileType } from './mock/profileMockData'
import useProfile from './useProfile'
import useProfileRouter from './useProfileRouter'
import ImageProfile from '../shared/ImageProfile'

export default function Profile({ data }: { data: ProfileType }) {
  const { profile, isMyProfile } = useProfile(data)
  const { moveToParams, profileTabs } = useProfileRouter()
  const { displayFeedCount, displayProjectCount, organizations, profile_image_url, user_name } = profile

  return (
    <div>
      <div className='flex items-center gap-x-4 p-5'>
        <ImageProfile src={profile_image_url} alt={user_name} className='h-[72px] w-[72px] shrink-0 rounded-full' />
        <div className='w-full space-y-4'>
          <div className='flex h-[30px] items-center justify-between'>
            <span className='large-title-1'>{user_name}</span>
            {isMyProfile && (
              <Link href='/profile/update' className='note-3 rounded-2xl border border-gray-300 bg-white px-[15px] py-2'>
                설정
              </Link>
            )}
          </div>
          <div className='body-3 flex items-center gap-x-5 text-gray-600'>
            <span>게시글 {displayFeedCount}</span>
            <span>프로젝트 {displayProjectCount}</span>
          </div>
        </div>
      </div>
      <div className='scrollbar-hide mb-9 flex items-center gap-x-2 overflow-x-auto px-5'>
        {organizations.map(({ icon, name }) => (
          <IconChip key={name} size='md' categoryIconNames={icon} />
        ))}
      </div>
      <div className='flex items-center justify-between px-9 pb-4'>
        {profileTabs.map(({ icon: Icon, label, url, selected, selectedIcon: SelectedIcon }) => (
          <div key={label} onClick={() => moveToParams({ tab: url })} className='flex items-center gap-x-1'>
            {selected ? <SelectedIcon className='icon-sm' /> : <Icon className='icon-sm' />}
            <span className={classNames(selected ? 'text-gray-700' : 'text-gray-400', 'body-1')}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
