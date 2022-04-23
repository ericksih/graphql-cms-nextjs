import React from 'react';
import Link from 'next/link';
import navStyles from './../styles/Nav.module.css';

const Navigation = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
