'use client'

import { ThemeProvider } from '@80000coding/next-themes'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute='class'>{children}</ThemeProvider>
    </NextUIProvider>
  )
}
