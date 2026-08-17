import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { MainPage } from "./components/MainPage/MainPage";
import "./main.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Корневой элемент не найден");
}

const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
);
