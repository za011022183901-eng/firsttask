
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // هنكتب الستايل في ملف خارجي

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <NavLink to="/" className="nav-logo">
          Start Framework
        </NavLink>

        {/* زرار الهامبورجر */}
        <div
          className={`nav-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        {/* اللينكات */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/home" onClick={() => setIsOpen(false)}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallary" onClick={() => setIsOpen(false)}>
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}


### ملف CSS (Navbar.css)


/* Navbar container */
.navbar {
  background: #0d6efd; /* لون أزرق */
  padding: 0.8rem 1.5rem;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Flex container */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

/* Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
}

.nav-links li a:hover {
  color: #ffc107;
}

/* Hamburger */
.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  transition: all 0.3s;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 65px;
    right: 0;
    background: #0d6efd;
    flex-direction: column;
    width: 200px;
    padding: 1rem;
    display: none;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-toggle {
    display: flex;
  }
}

