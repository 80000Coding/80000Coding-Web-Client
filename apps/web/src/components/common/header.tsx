import { DynamicBackIcon, DynamicCloseIcon, DynamicMenuIcon, StaticProfileIcon } from '@80000coding/web-icons'
import {
  StaticCategoryIcon,
  StaticHelpIcon,
  StaticHotpostIcon,
  StaticLogoutIcon,
  StaticProjectIcon,
  StaticRankingIcon,
  StaticScrapIcon,
} from '@80000coding/web-icons'
import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Link from 'next/link'
import { useState } from 'react'

import { Text } from '../Text'

const DEFAULT_MENU_ITEMS = [
  {
    url: '/categories',
    label: '카테고리 모아보기',
    icon: StaticCategoryIcon,
  },
  {
    url: '/projects',
    label: '프로젝트 둘러보기',
    icon: StaticProjectIcon,
  },
  {
    url: '/hotpost',
    label: '오늘의 게시글 보기',
    icon: StaticHotpostIcon,
  },
  {
    url: '/rangkings',
    label: '컨트리뷰터 랭킹 보기',
    icon: StaticRankingIcon,
  },
]

const DEFAULT_SIGNED_USER_MENU_ITEMS = [
  {
    url: '/bookmarks',
    label: '나의 북마크',
    icon: StaticScrapIcon,
  },
  {
    url: '/help',
    label: '문의하기',
    icon: StaticHelpIcon,
  },
  {
    url: '/auth/logout',
    label: '로그아웃',
    icon: StaticLogoutIcon,
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  /** 임시 login 상태값 */
  const isSignedIn = true

  return (
    <Navbar classNames={{ wrapper: 'px-5 py-4.5' }} isBlurred={false} height='60px' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <img src='/logo/logo.svg' alt='logo' />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarMenuToggle
          icon={isMenuOpen ? <DynamicCloseIcon className='h-5 w-5' /> : <DynamicMenuIcon className='h-5 w-5' />}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
      </NavbarContent>
      <NavbarMenu className='flex flex-col items-center px-5'>
        <div className='w-full flex-1 divide-y divide-gray-300'>
          <Link href={isSignedIn ? '/profile/id' : '/login'} className='flex items-center px-[5px] py-6'>
            <Avatar
              className='mr-2.5'
              showFallback
              /** TODO: 유저 프로필 이미지로 변경, 자동으로 undefined 됨 */
              src={isSignedIn ? 'https://80000coding.s3.ap-northeast-2.amazonaws.com/image.png' : undefined}
              fallback={<StaticProfileIcon className='h-10 w-10' />}
            />
            <Text type='title-1' children={isSignedIn ? '홍길동' : '로그인하기'} className='mr-1 leading-4' />
            <DynamicBackIcon className='h-3.5 w-3.5 rotate-180' />
          </Link>

          {isSignedIn && (
            <div className='px-[11px] py-[18.5px]'>
              {DEFAULT_SIGNED_USER_MENU_ITEMS.slice(0, 1).map(({ label, icon: Icon, url }) => (
                <NavbarMenuItem key={label}>
                  <Link href={url}>
                    <div className='flex items-center gap-x-4'>
                      <Icon />
                      <Text type='title-2' children={label} />
                    </div>
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          )}

          <div className='space-y-[25px] px-[11px] py-[26.5px]'>
            {DEFAULT_MENU_ITEMS.map(({ label, icon: Icon, url }) => (
              <NavbarMenuItem key={label}>
                <Link href={url}>
                  <div className='flex items-center gap-x-4'>
                    <Icon />
                    <Text type='title-2' children={label} />
                  </div>
                </Link>
              </NavbarMenuItem>
            ))}
          </div>

          {isSignedIn && (
            <div className='space-y-[25px] px-[11px] py-[19px]'>
              {DEFAULT_SIGNED_USER_MENU_ITEMS.slice(1).map(({ label, icon: Icon, url }) => (
                <NavbarMenuItem key={label}>
                  <Link href={url}>
                    <div className='flex items-center gap-x-4'>
                      <Icon />
                      <Text type='title-2' children={label} />
                    </div>
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          )}
        </div>

        <Link href='##' className='mb-[73px] w-fit'>
          <Text type='body-3' className='text-center underline' children='PWA 설치해서 이용하기' />
        </Link>
      </NavbarMenu>
    </Navbar>
  )
}
