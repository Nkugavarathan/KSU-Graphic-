import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Navbar.css"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const navItems = [
    { label: "Home", path: "/", className: "nav-home" },
    { label: "About", path: "/about", className: "nav-about" },
    { label: "Services", path: "/services", className: "nav-services" },
    { label: "Contact", path: "/contact", className: "nav-contact" },
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
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {navItems.map(({ label, path, className }) => (
            <li className="nav-item" key={label}>
              <NavLink to={path} className={`nav-link ${className}`}>
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
