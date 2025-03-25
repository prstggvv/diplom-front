import { Route, Routes } from 'react-router-dom';
import { classNames } from '../../utils/classNames/classNames';
import { Header } from '../Header';
import Main from '../Main/Main';
import { Login } from '../../pages/LoginPage';

function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
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
      </div>
    </div>
  )
}

export default App
