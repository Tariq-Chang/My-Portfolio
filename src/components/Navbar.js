import "./Navbar.css";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="navbar__options">
          <a href="#homepage" className="navbar__option">
            Home
          </a>
          <a href="#projects" className="navbar__option">
            Projects
          </a>
          <a href="#services" className="navbar__option">
            Services
          </a>
          <a href="#contact" className="navbar__option">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
