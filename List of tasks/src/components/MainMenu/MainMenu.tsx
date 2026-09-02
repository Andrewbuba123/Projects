import "./MainMenu.css";
import { MainMenuProps } from "../../types";
import { Link } from "react-router-dom";

export const MainMenu = ({ tasks }: MainMenuProps) => {
  return (
    <nav className="main-menu">
      <div className="main-menu__title">Меню</div>

      <ul className="main-menu__list">
        <li className="main-menu__item">
          <Link to="/" className="main-menu__link main-menu__link--active">
            Главная
          </Link>
        </li>
        <li className="main-menu__item">
          <Link to="/tasks" className="main-menu__link">
            Задачи ({tasks.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
};
