import { useSelector } from "react-redux"
import authSelectors from "redux/authUser/aurhUser"
import {AiFillHome} from "react-icons/ai"
import { NavLink } from "react-router-dom"



const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    <div>
        <NavLink to="/">
            <AiFillHome/>
        </NavLink>
        {
            isLoggedIn && <NavLink to="/contacts">Your contacts</NavLink>
        }
    </div>
}

export default Navigation