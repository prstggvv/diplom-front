import { classNames } from '../../utils/classNames/classNames';
import cls from './Loader.module.css';

interface ILoaderData {
  className?: string;
}

const Loader = ({ className }: ILoaderData) => {
  return (
    <span className={classNames(cls.loader, {}, [className || ''])}></span>
  );
};

export default Loader;