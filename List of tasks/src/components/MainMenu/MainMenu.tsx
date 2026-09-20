import "./MainMenu.css";
import { MainMenuProps } from "../../types";
import { NavLink } from "react-router-dom";

export const MainMenu = ({ tasks }: MainMenuProps) => {
  return (
    <nav className="main-menu">
      <div className="main-menu__title">Меню</div>

      <ul className="main-menu__list">
        <li className="main-menu__item">
          <NavLink to="/" end className="main-menu__link">
            Главная
          </NavLink>
        </li>
        <li className="main-menu__item">
          <NavLink to="/tasks" className="main-menu__link">
            Задачи ({tasks.length})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
