import { NavLink } from 'react-router-dom';
import PhoneBook from 'components/PhoneBook/PhoneBook';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/authUser/aurhUser';
import css from './AppBar.module.css'
import classNames from 'classnames';



export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

 
    return (
        <header className={css.header}>
           {isLoggedIn 
           ? <PhoneBook/>
           :(<div>
           <h1 className={css.header_h}>Phone book</h1>
           <ul  className={css.header_nav}>
                <li>
                    <NavLink
                    to="/register"
                    className={classNames(css.header_nav__items, css.registr, css.third, css.header_nav__text)}
                    >
                        Sign Up
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to="/login"
                        className={classNames(css.header_nav__items, css.login, css.third, css.header_nav__text)}
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
            </div>)}
        </header>
    );
  }