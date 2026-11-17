
import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('welcome')

  const links = [
    { name: 'Home', href: '#welcome' },
    { name: 'About', href: '#about' },
    { name: 'Work Process', href: '#work' },
    { name: 'Testimonials', href: '#testi' },
    { name: 'Pricing Tables', href: '#price' },
    { name: 'Blog Entries', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
  ]

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="w-full flex justify-center h-25 gap-5 pt-6 fixed top-0 left-0 z-50">
      <nav className="w-full gap-5 max-w-6xl bg-white/50 backdrop-blur-md rounded-[100px] px-8 py-4 flex items-center justify-center shadow-[0_2px_48px_0_rgba(0,0,0,0.1)]">

        <a href="#welcome" className="flex items-center">
          <img src={logo} alt="Softy Pinko Logo" className="h-8" />
        </a>

        <button
          className="md:hidden text-2xl text-brand-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center gap-8 text-sm font-medium absolute md:static top-full left-0 w-full md:w-auto bg-white/90 md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none rounded-2xl md:rounded-none mt-2 md:mt-0`}
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  activeSection === link.href
                    ? 'text-primary'
                    : 'text-brand-black hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}

export default Header
