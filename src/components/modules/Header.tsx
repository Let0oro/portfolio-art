import React from 'react'
import { TypographyH1 } from '../ui/typography'

const Header = () => {
  return (
    <div className='text-3xl font-bold justify-between'>
       <TypographyH1>TITLE</TypographyH1>
            <div className="w-lg bg-amber-600 h-full">
              <img className="w-full max-h-full" src="" alt=""/>
            </div>
    </div>
  )
}

export default Header
