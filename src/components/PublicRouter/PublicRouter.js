import { useSelector } from 'react-redux';
import authSelectors from 'redux/authUser/aurhUser';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const  PublicRouter = (
  {restricted = false, redirectTo}) => {

        const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
        const shouldRedirect = isLoggedIn && restricted;

      return (
        <>
          {shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet/>}
        </>);
}

export default PublicRouter

PublicRouter.propTypes = {
  restricted: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};