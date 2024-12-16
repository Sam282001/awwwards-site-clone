import React from 'react'

import {FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaTwitch, FaXTwitter} from 'react-icons/fa6'

const links = [
    { href: 'https://www.linkedin.com/in/sameer-maitre/', icon: <FaLinkedinIn />},
    { href: 'https://github.com/Sam282001', icon: <FaGithub />},
    { href: 'https://x.com/SameerJ07287236', icon: <FaXTwitter />},
    { href: 'https://www.instagram.com/sameer_._____jain/', icon: <FaInstagram />},
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm md:text-left'>
                &copy; Nova 2024. All Rights Reserved
            </p>

            <div className='flex justify-center gap-4 md:justify-star'>
                {links.map((link) => (
                    <a href={link.href} target='_blank' className='hover:text-white cursor-pointer'>
                        {link.icon}
                    </a>
                ))}
            </div>

            <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>
                Privacy Policy
            </a>

        </div>
    </footer>
  )
}

export default Footer
