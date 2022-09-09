import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/authUser/aurhUser';
import operations from 'redux/authUser/authUserApi';
import css from "./Menu.module.css"

const Menu = () => {

    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return (
        <div>
            <p>Welcom: {name} </p>
            <button 
            type='button'
            onClick={() => dispatch(operations.logOut())}>
            </button>
        </div>
    )

}

export default Menu