import { Card } from './Card';
import './CardList.css';

export const CardList = ({
  list,
  onItemTitleChange,
  onItemToggle,
  onItemDelete,
  inputRef
}) => {
  return (
    <ul className="card-list">
      {list.map(({ id, title, done }, index) => (
        <li key={id} className="card-list__item">
          <Card
            id={id}
            title={title}
            done={done}
            onTitleChange={onItemTitleChange}
            onToggle={onItemToggle}
            onDelete={onItemDelete}
            ref={index === list.length - 1 ? inputRef : null}
          />
        </li>
      ))}
    </ul>
  );
};
