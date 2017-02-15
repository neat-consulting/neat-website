import React from 'react';
import { Link } from 'react-router';

export default function NavLink({route, menuToggled, toggleMenu}) {
  if (route === 'menu') {
    return (
      <li className="menu">
        <a onClick={() => toggleMenu(menuToggled)}>&#9776;</a>
      </li>
    );
  }

  return (
    <li>
      <Link
        to={route === 'home' ? '/' : `/${route}`}
        onlyActiveOnIndex={true}>
        {route}
      </Link>
    </li>
  )
}
