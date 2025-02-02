"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links= [
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
        name: "Experience",
        href: "/Experience",
    },
    {
        name: "Contact",
        href: "/Contact",
    }
]



const Nav = () => {
    const pathName= usePathname();
  return (
    <nav className='flex gap-8'>
{Links.map((link) => (
  <Link 
  href={link.href} 
  key={link.name} 
  className={`${link.href === pathName ? "text-accent-Default border-b-2 border-accent-Default capitalize font-medium" : ""} hover:text-accent-Default transition-all`}>
  {link.name}
</Link>
))}
    </nav>
  )
}

export default Nav