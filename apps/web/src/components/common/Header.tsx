'use client'
import { DynamicChevronIcon, DynamicNavCloseIcon, DynamicNavMenuIcon } from '@80000coding/web-icons'
import {
  StaticCategoryOnLightIcon,
  StaticDefaultProfileLightIcon,
  StaticHelpOnLightIcon,
  StaticLogoutOnLightIcon,
  StaticProjectOnLightIcon,
  StaticRankingOnLightIcon,
  StaticScrapOnLightIcon,
  StaticTodaypostOnLightIcon,
} from '@80000coding/web-icons'
import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const DEFAULT_MENU_ITEMS = [
  {
    url: '/categories',
    label: '카테고리 모아보기',
    shortLabel: '카테고리',
    icon: StaticCategoryOnLightIcon,
  },
  {
    url: '/projects',
    label: '프로젝트 둘러보기',
    shortLabel: '프로젝트',
    icon: StaticProjectOnLightIcon,
  },
  {
    url: '/hotpost',
    label: '오늘의 게시글 보기',
    shortLabel: '인기글',
    icon: StaticTodaypostOnLightIcon,
  },
  {
    url: '/rangkings',
    label: '컨트리뷰터 랭킹 보기',
    shortLabel: '랭킹',
    icon: StaticRankingOnLightIcon,
  },
]

const DEFAULT_SIGNED_USER_MENU_ITEMS = [
  {
    url: '/bookmarks',
    label: '나의 북마크',
    icon: StaticScrapOnLightIcon,
  },
  {
    url: '/help',
    label: '문의하기',
    icon: StaticHelpOnLightIcon,
  },
  {
    url: '/auth/logout',
    label: '로그아웃',
    icon: StaticLogoutOnLightIcon,
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  /** 임시 login 상태값 */
  const isSignedIn = false

  return (
    <Navbar classNames={{ wrapper: 'px-5 py-4.5' }} isBlurred={false} height='60px' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <a href='/'>
            <Image src='/logo/logo.svg' alt='logo' width={135} height={23} />
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarMenuToggle
          icon={isMenuOpen ? <DynamicNavCloseIcon className='h-5 w-5' /> : <DynamicNavMenuIcon className='h-5 w-5' />}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
      </NavbarContent>
      <NavbarMenu className='flex flex-col items-center px-5'>
        <div className='w-full flex-1 divide-y divide-gray-300'>
          <Link href={isSignedIn ? '/profile/id' : '/signin'} className='flex items-center px-[5px] py-6'>
            <Avatar
              className='mr-2.5'
              showFallback
              /** TODO: 유저 프로필 이미지로 변경, 자동으로 undefined 됨 */
              src={isSignedIn ? 'https://80000coding.s3.ap-northeast-2.amazonaws.com/image.png' : undefined}
              fallback={<StaticDefaultProfileLightIcon className='h-10 w-10' />}
            />
            <div className='title-1 mr-1'>{isSignedIn ? '홍길동' : '로그인하기'}</div>
            <DynamicChevronIcon className='h-3.5 w-3.5 rotate-180' />
          </Link>

          {isSignedIn && (
            <div className='px-[11px] py-[18.5px]'>
              {DEFAULT_SIGNED_USER_MENU_ITEMS.slice(0, 1).map(({ label, icon: Icon, url }) => (
                <NavbarMenuItem key={label}>
                  <Link href={url}>
                    <div className='flex items-center gap-x-4'>
                      <Icon />
                      <div className='title-2'>{label}</div>
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
                    <div className='title-2'>{label}</div>
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
                      <div className='title-2'>{label}</div>
                    </div>
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          )}
        </div>

        <Link href='##' className='mb-[73px] w-fit'>
          <div className='body-3 text-center underline'>PWA 설치해서 이용하기</div>
        </Link>
      </NavbarMenu>
    </Navbar>
  )
}
