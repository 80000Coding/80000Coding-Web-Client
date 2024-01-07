'use client'

import { ThemeProvider } from '@80000coding/next-themes'
import { NextUIProvider } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return <NextUIProvider>{mounted ? <ThemeProvider attribute='class'>{children}</ThemeProvider> : children}</NextUIProvider>
}
