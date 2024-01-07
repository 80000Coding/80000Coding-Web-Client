import { ThemeProvider } from '@80000coding/next-themes'
import { ThemeDropdown } from '@80000coding/ui'

const ThemeDropdownContainer = () => {
  return (
    <ThemeProvider attribute='class'>
      <ThemeDropdown />
    </ThemeProvider>
  )
}

export default ThemeDropdownContainer
