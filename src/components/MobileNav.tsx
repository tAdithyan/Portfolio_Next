"use client"
import React from 'react'
import {Sheet,SheetContent,SheetTrigger} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";




const Links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Services",
        href: "/Services",
    },
    {
        name: "Resume",
        href: "/Resume",
    },
    {
        name: "Works",
        href: "/Works",
    },
    {
        name: "Contact",
        href: "/Contact",
    }
]

const MobileNav = () => {
    const pathname =usePathname()

  return (
    <Sheet>
        <SheetTrigger>
        <CiMenuFries className='text-[32px] text-accent' />

        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className='mt-32 mb-40 text-center  text-2xl'>
                <Link href='/'>
                Adithyan T<span className='text-accent-Default'>.</span>
                </Link>
            </div>
            <nav className='flex flex-col gap-8 justify-center items-center'>
                {Links.map((link) => (
                    <Link 
                    href={link.href} 
                    key={link.name} 
                    className={`${link.href === pathname ? "text-accent-Default border-b-2 border-accent-Default capitalize font-medium" : ""} hover:text-accent-Default transition-all text-xl`}>
                    {link.name}
                    </Link>
                ))}
            </nav>
            </SheetContent>
    </Sheet>
  )
}

export default MobileNav