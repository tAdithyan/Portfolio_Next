/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link';
import React from 'react'
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa6';

const SocialLinks = [
  { name: "Github" ,
    link:'/',
    Icon:<FaGithub />
  },
  { name: "Linkdin" ,
    link:'/',
    Icon:<CiLinkedin />

  },
  { name: "Mail" ,
    link:'/',
    Icon:<CiMail />


  },
  // Add more objects to the array as needed
];

const Socials = ({containerStyles,IconStyles}) => {
  return (
    <div className={containerStyles}>
        {SocialLinks.map((link) => (
          <Link key={link.name} href={link.link} target="_blank" className={IconStyles} rel="noopener noreferrer">
            {link.Icon}
          </Link>
        ))}
    </div>
  )
}

export default Socials 