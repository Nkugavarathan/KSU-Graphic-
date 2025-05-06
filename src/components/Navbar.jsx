
import { NavLink } from "react-router-dom"
import "./Navbar.css" // for hover underline effect

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand" href="/">
        KSU Graphics
      </a>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li className="nav-item" key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
