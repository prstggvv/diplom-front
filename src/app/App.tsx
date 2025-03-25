import { classNames } from '../utils/classNames/classNames';
import AppRouter from './providers/AppRouter/AppRouter';

function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
