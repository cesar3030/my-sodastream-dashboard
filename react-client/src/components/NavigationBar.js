import React from 'react';

const NavigationBar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center">My Sodastream Dashboard</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="/refills">Refills</a></li>
          <li><a href="/usage">Usage</a></li>
          <li><a href="badges.html">Reloads</a></li>
          <li><a href="badges.html">Savings</a></li>
          <li><a href="badges.html">Bottes</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;