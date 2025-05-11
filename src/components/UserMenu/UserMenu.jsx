import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOutThunk } from '../../redux/auth/operations';
import css from './UserMenu.module.css'


const UserMenu = () => {

          const dispatch = useDispatch();
  const user = useSelector(selectUser);



  return (
    
    <div className={css.all}>
        <h3>Welcome, {user.name}</h3>
        <button className={css.btn} onClick={()=>dispatch(logOutThunk())} >Log out</button>
    </div>
    
  )
}

export default UserMenu
