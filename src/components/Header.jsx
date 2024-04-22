// Using react to apply conditional styles, may change later
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
    const location = useLocation();
    const [activePath, setActivePath] = useState('/');

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

  return (
    <header>
      <h1>Harry Potter's React Portfolio</h1>
      <nav>
        <Link className={activePath === '/' || activePath === '/about' ? 'active' : ''} to="/about">
          About Me
        </Link>
        <Link className={activePath === '/portfolio' ? 'active' : ''} to="/portfolio">
          Portfolio
        </Link>
        <Link className={activePath === '/contact' ? 'active' : ''} to="/contact">
          Contact
        </Link>
        <Link className={activePath === '/resume' ? 'active' : ''} to="/resume">
          Resume
        </Link>
      </nav>
    </header>
  );
}

export default Header;