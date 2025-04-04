import { Routes, Route } from "react-router-dom";
import { Header } from "../../../components/Header";
import Main from "../../../components/Main/Main";
import { Login } from "../../../pages/LoginPage";
import { Register } from "../../../pages/RegisterPage";
import { Schedule } from "../../../pages/SchedulePage";
import { Settings } from "../../../pages/SettingsPage";

const AppRouter = () => {
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
          <Login />
        } />
        <Route path='/signup' element={
          <Register />
        } />
        <Route path='/schedule' element={
          <Schedule />
        } />
        <Route path='/settings' element={
          <Settings />
        } />
      </Routes>
    </>
  )
}

export default AppRouter;