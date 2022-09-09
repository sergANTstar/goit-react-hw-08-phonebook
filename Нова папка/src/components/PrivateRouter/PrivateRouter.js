import { useSelector } from "react-redux";
import {Navigate, Outlet} from 'react-router-dom';
import authSelectors from "redux/authUser/aurhUser";

const PrivateRouter = () =>{
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <>
            {isLoggedIn ? <Outlet/> : <Navigate to="/login"/>}
        </>
    )
}

export default PrivateRouter