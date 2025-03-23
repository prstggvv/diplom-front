import { classNames } from '../../utils/classNames/classNames';
import { Header } from '../Header';
import Main from '../Main/Main';

function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
