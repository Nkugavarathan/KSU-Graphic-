import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Navbar.css"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", path: "/", className: "nav-home" },
    { label: "About", path: "/about", className: "nav-about" },
    { label: "Services", path: "/services", className: "nav-services" },
    { label: "Contact", path: "/contact", className: "nav-contact" },
    { label: "Login", path: "/login", className: "login" },
  ]

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top px-4 ${
        scrolled ? "navbar-scrolled" : "bg-light"
      }`}
    >
      <a className="navbar-brand" href="/">
        KSU Graphics
      </a>

      {/* Hamburger button only shows on small screens */}
      <button
        className="navbar-toggler custom-toggler d-lg-none"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? (
          <span className="close-icon">&times;</span>
        ) : (
          <span className="hamburger-icon">&#9776;</span>
        )}
      </button>

      {/* Collapse for mobile */}
      <div
        className={`collapse navbar-collapse justify-content-end ${
          menuOpen ? "show" : ""
        }`}
        id="navbarNav"
      >
        <ul
          className={`navbar-nav ${
            menuOpen ? "mobile-menu" : "d-flex flex-row gap-3"
          }`}
        >
          {navItems.map(({ label, path, className }, index) => (
            <li
              className={`nav-item animate-item`}
              style={menuOpen ? { animationDelay: `${index * 0.1}s` } : {}}
              key={label}
            >
              <NavLink
                to={path}
                className={`nav-link ${className}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
