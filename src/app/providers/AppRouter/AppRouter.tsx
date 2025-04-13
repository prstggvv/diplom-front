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
import { setUser } from "../../../shared/store/slice/userSlice";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegistration = (
    email: string, name: string, password: string,
  ) => {
    const data = { name, email, password };
    userApi.registration(data)
      .then(() => {
        navigate('/signin', {replace: true});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleLogin = (email: string, password: string) => {
    const data = { email, password };
    userApi.login(data)
      .then((res) => {
        if (res.token && res) {
          localStorage.setItem('jwt', res.token);
          dispatch(setUser(email));
          setLoggedIn(true);
          navigate('/schedule', {replace: true});
        }
      })
      .catch((err) => {
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

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
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
            <Header />
            <ProtectedRoute 
              element={<Schedule />}
              loggedIn={loggedIn}
            />
          </>
        } />
        <Route path='/settings' element={
          <>
            <Header />
            <ProtectedRoute 
              element={<Settings />}
              loggedIn={loggedIn}
            />
          </>
        } />
      </Routes>
    </>
  )
}

export default AppRouter;