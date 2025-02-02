import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-8 xl-py-12 text-white '>
<div className="container mx-auto flex justify-between items-center">
<Link href='/'>
<h1 className='text-4xl font-semibold'>
    Adithyan T<span className='text-accent-Default'>.</span>
</h1>

</Link>
<div>


    {/* desktop Menu */}
    <div className='hidden xl:flex items-center gap-8'>

    <Nav/>
    <Link href='/Contact'>
    <Button >Hire Me </Button>
    </Link>
    </div>

    {/* MObile Menu */}
    <div className='xl:hidden'>
<MobileNav/>
    </div>
</div>
</div>



    </header>
  )
}

export default Header