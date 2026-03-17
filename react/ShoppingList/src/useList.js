import { useState, useEffect, useRef } from "react";

export function useList() {
  const [list, setList] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [list.length]);

  /** Создать новый элемент. */
  const createItem = () => {
    const newCard = {
      id: crypto.randomUUID(),
      title: "",
      done: false
    };
    setList((prev) => [...prev, newCard]);
  };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */

  const setItemTitle = (id, title) => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title } : item)),
    );
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
    inputRef,
  };
}
