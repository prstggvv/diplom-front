import complete from '../../../assets/images/icons/popup/yes.svg';
import error from '../../../assets/images/icons/popup/no.svg';

import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Header } from "../../../components/Header";
import Main from "../../../components/Main/Main";
import { Login } from "../../../pages/LoginPage";
import { Register } from "../../../pages/RegisterPage";
import { Schedule } from "../../../pages/SchedulePage";
import { Settings } from "../../../pages/SettingsPage";
import { useEffect, useState } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute/ProtectedRoute";
import { userApi } from "../../../shared/api/UserApi";
import { useDispatch } from "react-redux";
import { setUser, logout } from "../../../shared/store/slice/userSlice";
import { NavMenu } from "../../../components/NavMenu";
import { InfoToolTip } from '../../../components/InfoToolTip';

const AppRouter = () => {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isPopup, setIsPopup] = useState(false);
  const [isTextPopup, setIsTextPopup] = useState('');
  const [logoPopup, setLogoPopup] = useState('');
  const [isOpenNav, setIsOpenNav] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNav = () => {
    setIsOpenNav((prev) => !prev);
  }

  const handleCloseNav = () => {
    setIsOpenNav(false);
  }

  const handleClosePopup = () => {
    setIsPopup(false);
  }

  const handleRegistration = (
    email: string, name: string, password: string,
  ) => {
    const data = { name, email, password };
    userApi.registration(data)
      .then(() => {
        setIsPopup(true);
        setLogoPopup(complete);
        setIsTextPopup('Вы зарегестрировались!');
        navigate('/signin', {replace: true});
      })
      .catch((err) => {
        setIsPopup(true);
        setLogoPopup(error);
        setIsTextPopup('Что-то пошло не так!');
        console.log(err);
      })
  }

  const handleLogin = (email: string, password: string) => {
    const data = { email, password };
    userApi.login(data)
      .then((res) => {
        if (res.token && res) {
          localStorage.setItem('jwt', res.token);
          setIsPopup(true);
          setLogoPopup(complete);
          setIsTextPopup('Вы вошли!');
          dispatch(setUser(email));
          setLoggedIn(true);
          navigate('/schedule', {replace: true});
        }
      })
      .catch((err) => {
        setIsPopup(true);
        setLogoPopup(error);
        setIsTextPopup('Что-то пошло не так!');
        console.log(err);
      })
  }

  const handleCheckToken = () => {
    const path = location.pathname;
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      userApi.checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
          navigate(path, {replace: true});
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  useEffect(() => {
    handleCheckToken();
  }, [loggedIn]);

  const handleExit = () => {
    setLoggedIn(false);
    localStorage.clear();
    dispatch(logout());
  }

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/schedule', { state: { showPopup: true } });
    }, 4000);
  };

  useEffect(() => {
    if (location.pathname === '/schedule' && location.state?.showPopup) {
      setIsTextPopup('Вы успешно сгенерировали расписание');
      setLogoPopup(complete);
      setIsPopup(true);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <NavMenu
        isOpen={isOpenNav}
        isClose={handleCloseNav}
        isOut={handleExit}
      />
      <InfoToolTip
        isClose={handleClosePopup}
        logo={logoPopup}
        isOpen={isPopup}
        title={isTextPopup}
      />
      <Routes>
        <Route path='/' element={
          <>
            <Header
              isOpen={handleOpenNav}
              isLogged={loggedIn}
              exit={handleExit}
            />
            <Main />
          </>
        } />
        <Route path='/signin' element={
          loggedIn ? <Navigate to='/' replace /> :
          <Login 
            handleLogin={handleLogin}
          />
        } />
        <Route path='/signup' element={
          loggedIn ? <Navigate to='/' replace /> :
          <Register
            handleRegister={handleRegistration}
          />
        } />
        <Route path='/schedule' element={
          <>
            <Header
              isOpen={handleOpenNav}
              isLogged={loggedIn}
              exit={handleExit}
            />
            <ProtectedRoute 
              element={<Schedule />}
              loggedIn={loggedIn}
            />
          </>
        } />
        <Route path='/settings' element={
          <>
            <Header
              isOpen={handleOpenNav}
              isLogged={loggedIn}
              exit={handleExit}
            />
            <ProtectedRoute 
              element={<Settings
                loading={loading}
                handleClick={handleClick}
              />}
              loggedIn={loggedIn}
            />
          </>
        } />
      </Routes>
    </>
  )
}

export default AppRouter;