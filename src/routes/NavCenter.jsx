import React, { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo.svg';

export default function NavCenter() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const toggleNav = (navBtn) => {
    setShowNavMenu(!navBtn);
  }
  return (
    <Fragment>
      <div className='sidebar-container'>
        <div className="sidebar-header">
          <Link to="/" >
            <img src={logo} alt="logo with two circles"></img>
          </Link>

          <GiHamburgerMenu className='toggle-btn' size={30} onClick={() => toggleNav(showNavMenu)} />
        </div>

        <div className={showNavMenu ? "nav-links-container show-links" : "nav-links-container"}>
          <Link onClick={() => setShowNavMenu(false)} className="nav-link" to="/react-money-tracker-app" >
            home
          </Link>
          <Link onClick={() => setShowNavMenu(false)} className="nav-link" to="/react-money-tracker-app/income">
            income
          </Link>
          <Link onClick={() => setShowNavMenu(false)} className="nav-link" to="/react-money-tracker-app/expenses">
            expenses
          </Link>
        </div>


      </div>
      <Outlet />
    </Fragment>

  )
}
