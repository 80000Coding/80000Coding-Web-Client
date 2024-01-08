import { StaticNewIcon } from '@80000coding/web-icons'
import { useEffect } from 'react'

import Dropdown from './Dropdown'
import { useTheme } from '../hooks'

const ThemeDropdown = () => {
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <Dropdown
      menus={[
        {
          title: '라이트모드',
          icon: StaticNewIcon,
          onClick: () => setTheme('light'),
        },
        {
          title: '다크 모드',
          icon: StaticNewIcon,
          onClick: () => setTheme('dark'),
        },
        {
          title: '시스템 모드',
          icon: StaticNewIcon,
          onClick: () => setTheme('system'),
        },
      ]}
    />
  )
}

export default ThemeDropdown
