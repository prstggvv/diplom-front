import { Routes, Route } from "react-router-dom";
import { Header } from "../../../components/Header";
import Main from "../../../components/Main/Main";
import { Login } from "../../../pages/LoginPage";

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
      </Routes>
    </>
  )
}

export default AppRouter;