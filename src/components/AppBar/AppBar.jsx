import css from './AppBar.module.css'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../AuthNav/AuthNav'
import UserMenu from '../UserMenu/UserMenu'




const AppBar = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <header className={css.box}>
        
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}

    </header>

  )
}

export default AppBar
