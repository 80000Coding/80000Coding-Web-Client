import { CategoryIconNames, categoryIcons, Chip } from '@80000coding/ui'
import { StaticCommnetFlatIcon, StaticLikeFlatIcon, StaticScrapFlatIcon, StaticViewFlatIcon } from '@80000coding/web-icons'
import Link from 'next/link'

import { RefinedFeedsType } from './useFeedLists'
import useFeedRouter from './useFeedRouter'
import ImageProfile from '../shared/ImageProfile'

export default function Feed({ item }: { item: RefinedFeedsType }) {
  const { moveToContent } = useFeedRouter()

  const {
    content_id,
    title,
    body,
    displayCommentCount,
    displayCreatedAt,
    displayLikeCount,
    displayBookmarkCount,
    displayViewCount,
    content_image_url,
    profile_image_url,
    user_id,
    user_name,
    hash_tag_list,
    category_tag_list,
    displayRestTagCount,
  } = item

  return (
    <button onClick={() => moveToContent(content_id)} className='bg-white text-left'>
      {content_image_url && <img src={content_image_url} alt={title} className='h-[172px] w-[390px]' />}

      <div className='p-5 pt-6'>
        <div className='title-1A line-clamp-1'>{title}</div>
        <div className='body-3A mb-7 mt-3 line-clamp-2 text-gray-600'>{body}</div>

        <div className='flex justify-between'>
          <div className='flex items-center gap-x-1'>
            {category_tag_list.map(({ category_name }) => (
              <div key={category_name}>{categoryIcons[category_name as CategoryIconNames]?.source({ className: 'w-[21px] h-[21px]' })}</div>
            ))}
          </div>
          <div className='flex items-center gap-x-2'>
            {hash_tag_list.slice(0, 2).map(({ hash_tag_id, hash_tag_name }) => (
              <Chip key={hash_tag_id} text={`#${hash_tag_name}`} />
            ))}
            {displayRestTagCount && <Chip text={displayRestTagCount} />}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between px-4 py-3'>
        <div className='flex items-center gap-x-2'>
          <ImageProfile src={profile_image_url} alt={user_name} className='h-8 w-8 rounded-full' />
          <div className='space-y-1'>
            <Link href={`/profile/${user_id}`} className='note-1 flex text-gray-700' onClick={(e) => e.stopPropagation()}>
              {user_name}
            </Link>
            <div className='caption-3 text-gray-400'>{displayCreatedAt}</div>
          </div>
        </div>

        <div className='caption-3 flex items-center space-x-4 text-gray-600'>
          <div className='flex items-center gap-x-1'>
            <StaticViewFlatIcon className='h-3 w-3' />
            <span>{displayViewCount}</span>
          </div>
          <div className='flex items-center gap-x-1'>
            <StaticCommnetFlatIcon className='h-3 w-3' />
            <span>{displayCommentCount}</span>
          </div>
          <div className='flex items-center gap-x-1'>
            <StaticScrapFlatIcon className='h-3 w-3' />
            <span>{displayBookmarkCount}</span>
          </div>
          <div className='flex items-center gap-x-1'>
            <StaticLikeFlatIcon className='h-3 w-3' />
            <span>{displayLikeCount}</span>
          </div>
        </div>
      </div>
    </button>
  )
}
