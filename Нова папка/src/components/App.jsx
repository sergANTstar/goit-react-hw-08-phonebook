//import css from './App.module.css';//
import AppBar from './AppBar/AppBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/authUser/authUserApi';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import PublicRouter from './PublicRouter/PublicRouter';
import Spiner from './Spiner/Spiner';
import {Toaster} from 'react-hot-toast';
import authSelectors from 'redux/authUser/aurhUser';
import Backround from './Backround/Backround';

//const Home = lazy(() => import('../pages/Home/Home'))
const Registration = lazy(() => import('../pages/Registration/Registration'))
const Login = lazy(() => import('../pages/Login/Login'))
const ContactsPage = lazy(() => import('../pages/Contacts/ContactPage'))


 const App = () => {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(authSelectors.getIsFetchCurrentUser);


  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

   
  return isFetchCurrentUser ? (
    <Spiner/>)
     : ( <>
       <Backround/>
            <>
            <AppBar/>
              <Suspense
                fallback={<Spiner/>}>
                       <Routes>
                          <Route element={<PublicRouter restricted redirectTo="contacts" />}>
                            <Route path="/" element={<Login />} />
                          </Route>
                          <Route element={<PublicRouter restricted redirectTo="contacts" />}>
                            <Route path="register" element={<Registration />} />
                          </Route>
                          <Route element={<PublicRouter restricted redirectTo="contacts" />}>
                            <Route path="login" element={<Login />} />
                          </Route>
                          <Route element={<PrivateRouter />}>
                            <Route path="contacts" element={<ContactsPage />} />
                          </Route>
                          <Route element={<PublicRouter restricted redirectTo="contacts" />}>
                            <Route path="*" element={<Navigate to="login" />} />
                          </Route>
                      </Routes>
              </Suspense>
              <Toaster/>
            </>
      </>
  );
};

export default App