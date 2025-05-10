import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors'
import { logOutThunk } from '../../redux/auth/operation'




const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const isLoggedIn = useSelector(selectIsLoggedIn)


  return (
    <nav className={css.box}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
        {isLoggedIn && <h3>{user.name}</h3>}
        {! isLoggedIn && 
        (<>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Log in</NavLink>
        </>)}
        {isLoggedIn && <button onClick={()=>dispatch(logOutThunk())} className={css.btn}>Log out</button>}

    </nav>

  )
}

export default Header
