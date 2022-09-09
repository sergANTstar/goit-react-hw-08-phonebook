import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/authUser/aurhUser';
import operations from 'redux/authUser/authUserApi';
import css from "./PhoneBook.module.css"
import classNames from 'classnames';

const PhoneBook = () => {

    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return (
        <div className={css.book}>
            <p className={css.book__tect}>Welcom: {name} </p>
            <button 
            className={classNames(css.header_nav__items, css.login, css.third, css.header_nav__text)}
            type='button'
            onClick={() => dispatch(operations.logOut())}>
            Logout
            </button>
        </div>
    )

}

export default PhoneBook