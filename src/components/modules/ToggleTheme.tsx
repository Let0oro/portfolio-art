import React from 'react'
import { Toggle } from '../ui/toggle'
import { SunMoonIcon } from 'lucide-react'

const ToggleTheme = () => {

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    console.log(document.documentElement.classList.contains("dark"))
  }
  return (
    <Toggle onClick={toggleTheme} className="absolute top-4 right-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 group/toggle extend-touch-target size-9 border-border border bg-background">
      <SunMoonIcon className='size-5'/>
    </Toggle>
  )
}

export default ToggleTheme
