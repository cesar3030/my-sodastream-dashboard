import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Logo</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="sass.html">Refills</a></li>
            <li><a href="badges.html">Reloads</a></li>
            <li><a href="badges.html">Savings</a></li>
            <li><a href="badges.html">Bottes</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;