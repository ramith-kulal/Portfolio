'use client'

import Link from 'next/link'

import { navigationLinks } from '@/app/utils/data'

export const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.substring(1))
    if (section) {
      const header = document.querySelector('header')

      if (header) {
        const headerHeight = window.getComputedStyle(header).height
        const headerHeightNumber = parseFloat(headerHeight)

        window.scrollTo({
          top: section.offsetTop - headerHeightNumber, // Ajuste para a altura do header
          behavior: 'smooth' // Rolagem suave
        })
      }
    }
  }

  return (
    <nav>
      <ul className="flex items-center gap-8 md:gap-5 sm:flex-col sm:gap-3">
        {navigationLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link
                className="relative flex items-center text-lg transition before:absolute before:text-yellow-400 before:opacity-0 before:transition before:content-['{'] after:absolute after:right-0 after:text-yellow-400 after:opacity-0 after:transition after:content-['}'] hover:text-target before:hover:-translate-x-4 before:hover:opacity-100 after:hover:translate-x-4 after:hover:opacity-100"
                href={link.path}
                scroll={false}
                onClick={() => scrollToSection(link.path)}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
        <li>
          <a
            href="https://drive.google.com/file/d/1uZMx5lcEea1uVkKg0iD47pGBOAVyoo-c/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2  font-semibold text-red-500 transition hover:text-white"
          >
            View Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}
