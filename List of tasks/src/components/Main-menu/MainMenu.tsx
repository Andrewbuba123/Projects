import "./MainMenu.css";
import {MainMenuProps} from "../../types"

export const MainMenu = ({ tasks } : MainMenuProps) => {
  return (
    <nav className="main-menu">
      <div className="main-menu__title">Меню</div>

      <ul className="main-menu__list">
        <li className="main-menu__item">
          <a href="/" className="main-menu__link main-menu__link--active">
            Главная
          </a>
        </li>
        <li className="main-menu__item">
          <a href="/tasks" className="main-menu__link">
            Задачи ({tasks.length})
          </a>
        </li>
      </ul>
    </nav>
  );
};
