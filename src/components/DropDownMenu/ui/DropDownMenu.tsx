import { classNames } from "../../../utils/classNames/classNames";
import cls from "./DropDownMenu.module.css";
import { useState } from "react";

interface IDropDownMenuData {
  className?: string;
  options: string[];
  placeholder?: string;
}

export const DropDownMenu = ({
  className,
  options,
  placeholder,
}: IDropDownMenuData) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <nav className={classNames(cls.nav, {}, [className || ""])}>
      <div className={cls.dropdown}>
        <div className={cls.input} onClick={toggleOpen}>
          {selected || placeholder}
          <span className={cls.arrow}>{isOpen ? "▲" : "▼"}</span>
        </div>
        {isOpen && (
          <ul className={cls.menu}>
            {options.map((option) => (
              <li
                key={option}
                className={cls.item}
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
