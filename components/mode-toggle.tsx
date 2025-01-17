'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

export function ModeToggle() {
   const { theme, setTheme } = useTheme()

   return (
      <Button
         variant="ghost"
         type="button"
         size="icon"
         className="px-2"
         onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
         <SunIcon className="size-[1.2rem] text-black hover:text-neutral-200 dark:hidden dark:text-white" />
         <MoonIcon className="hidden size-[1.2rem] text-black hover:text-neutral-200 dark:block dark:text-white" />
      </Button>
   )
}
