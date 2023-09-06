'use client'

import Link from 'next/link'

import { DEFAULT_MENU_ITEMS } from '../common/Header'

export default function MainQuickPanel() {
  return (
    <div className='flex items-center divide-x divide-gray-300 border-b border-gray-300 py-3.5'>
      <div className='shrink-0 pb-2 pl-9 pr-8 pt-1.5'>
        {DEFAULT_MENU_ITEMS.slice(0, 1).map(({ icon: Icon, shortLabel, url }) => (
          <Link href={url} key={shortLabel} className='flex flex-col items-center'>
            <Icon className='icon-lg' />
            <aside className='caption-1'>{shortLabel}</aside>
          </Link>
        ))}
      </div>
      <div className='flex w-full items-center justify-between pb-2 pl-9 pr-11 pt-1.5'>
        {DEFAULT_MENU_ITEMS.slice(1).map(({ icon: Icon, shortLabel, url }) => (
          <Link href={url} key={shortLabel} className='flex flex-col items-center'>
            <Icon className='icon-lg' />
            <aside className='caption-1'>{shortLabel}</aside>
          </Link>
        ))}
      </div>
    </div>
  )
}
