import { Routes, Route } from "react-router-dom";
import { Header } from "../../../components/Header";
import Main from "../../../components/Main/Main";
import { Login } from "../../../pages/LoginPage";
import { Register } from "../../../pages/RegisterPage";

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
      </Routes>
    </>
  )
}

export default AppRouter;