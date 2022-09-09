import { useSelector } from 'react-redux';
import authSelectors from 'redux/authUser/aurhUser';
import { NavLink } from 'react-router-dom';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { BsBoxArrowInRight } from 'react-icons/bs';
import Menu from 'components/Menu/Menu';



export default function Home() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return(
    <section>
        <div>
            {isLoggedIn
            ? <Menu/>
            : (<nav>
                <ul>
                    <li>
                        <NavLink to="/register">
                            <BsFillPersonPlusFill/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">
                            <BsBoxArrowInRight />
                        </NavLink>
                    </li>
                </ul>
            </nav>)}
        </div>
    </section>

)

}