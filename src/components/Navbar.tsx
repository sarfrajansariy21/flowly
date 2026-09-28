import { useState } from 'react'
import Button from './Button'
import './Navbar.scss'

const LINKS = [
  { label: 'Product', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#testimonials' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__logo" aria-hidden="true" />
          Flowly
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="navbar__actions navbar__actions--mobile">
            <Button variant="ghost">Log in</Button>
            <Button variant="primary">Start free trial</Button>
          </div>
        </nav>

        <div className="navbar__actions navbar__actions--desktop">
          <Button variant="ghost">Log in</Button>
          <Button variant="primary">Start free trial</Button>
        </div>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
