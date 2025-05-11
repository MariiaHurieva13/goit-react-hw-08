import React from 'react'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

const Navigation = () => {

      const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
   <nav className={css.all}>
      <NavLink to="/" className={css.nav}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.nav}>
          Contacts
        </NavLink>
      )}
    </nav>
  )
}

export default Navigation
